# Helm Repository
For connect to Github Helm Repository please use http://github/web-seven/infrastructure
As username, your username on github and for password github access token.

# Hints:
* Command for move application to another cluster: 
```bash
argocd app list --project develop --output name | xargs -t -I{} argocd app patch {} --patch '{"spec": { "destination": { "server": "https://35.246.239.64" } }}' --type merge
```
* PGAdmin:
``` bash
docker pull dpage/pgadmin4
docker run -p 9000:80 -e 'PGADMIN_DEFAULT_EMAIL=user@domain.com' -e 'PGADMIN_DEFAULT_PASSWORD=admin' dpage/pgadmin4
```