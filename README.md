# TEST Helm charte custom with elasticsearch and express app.

## Install ECK-stack
View the [doc](https://github.com/elastic/cloud-on-k8s/blob/2.14/deploy/eck-stack/README.md)


```shell
kubectl port-forward svc/elasticsearch-master 9200
curl localhost:9200/_cat/indices
```
