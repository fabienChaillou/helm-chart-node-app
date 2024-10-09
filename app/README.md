## App express for the test into kubernetes and Helm

Just set `ELASTIC_NODE` env var to running container
```shell
docker run -e ELASTIC_NODE="http://elastic-domain.foo:9200" -p 3000:3000 <imageTagName>
```
