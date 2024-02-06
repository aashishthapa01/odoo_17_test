docker-compose up --build -d
docker-compose down


docker inspect <postgres_container_id>
docker exec -it <postgres_conatiner_id> psql -U odoo -l

docker rm -f $(docker ps -a -q)
docker rmi -f $(docker images -q)
docker volume rm $(docker volume ls -q)




<!-- https://www.yeastar.com/app-marketplace/odoo-crm-integration/ -->