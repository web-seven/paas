HELM_REPO_NAME="helm_repo_name"
helm repo add $HELM_REPO_NAME github://$CHART_REGISTRY;
cd /workdir/$SOURCES;

helm dependency update;
FROM_VERSION=$(yq eval '.version' Chart.yaml);
if printf '%s\n' "$FROM_VERSION" | grep -E "alpha|beta|rc"; then
TO_VERSION=$(printf '%s\n' "$FROM_VERSION" | sed 's/\(.*\)[0-9]/\1999999999999999999999/');
echo "prerelease";
else 
TO_VERSION=$(semver -i minor $FROM_VERSION);
echo "stable";
fi

echo "Search Version: $APP_NAME >=$FROM_VERSION, <$TO_VERSION";
REPO_VERSION=$(helm search repo $HELM_REPO_NAME/$APP_NAME --version ">=$FROM_VERSION, <$TO_VERSION" --output json | jq --raw-output '.[0].version');

echo "Current Version: $REPO_VERSION";
NEW_VERSION=$(semver -i $(echo $REPO_VERSION|grep -E "alpha|beta|rc" |xargs -I{} /bin/sh -c "echo prerelease") $REPO_VERSION);

if [ -z "$NEW_VERSION" ];
then
    NEW_VERSION=$FROM_VERSION
fi

echo "New Version: $NEW_VERSION";
helm package --version $NEW_VERSION --app-version $APP_VERSION .;
set -o pipefail;
ls -1 $APP_NAME*.tgz | xargs -t -I {} helm github push {} helm_repo_name develop
