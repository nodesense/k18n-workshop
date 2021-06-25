export PORT=8808
export VAR1=ttt


docker build -t node-proxy:0.0.1 .

docker images

docker run -p 49160:8808 -d node-proxy:0.0.1 --env VAR1="gggg"

 docker ps -a | grep node

docker run --env VAR1 --env PORT node-proxy:0.0.1 env | grep VAR1

working 

docker run  node-proxy:0.0.1
docker run -p 8808:8808 node-proxy:0.0.1

 docker stop 5ef5ea14477a

docker run -p 8808:8808 --env VAR1=value1 --env PORT=8808 node-proxy:0.0.1  


ssh root@23.217.135.42

docker logs 3cbd2d23e74c
docker run --image=node-proxy:0.0.1 


http://23.217.135.42:8808
http://23.217.135.42:30100


gopalakrishnansubramani

docker image tag 




docker login
docker image tag node-proxy:0.0.1  gopalakrishnansubramani/sample
docker push sample/node-proxy:0.0.1


docker push gopalakrishnansubramani/sample


kubectl apply -f node-proxy.yml

kubectl apply -f node-service.yml


kubectl get svc

 kubectl describe svc



docker pull gopalakrishnansubramani/sample:latest
