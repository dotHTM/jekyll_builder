
compose_file=docker/docker-compose.yaml
docker_files=${wildcard docker/*}

dc=docker-compose -f "${compose_file}"

default:
	@echo "blog!"


log/build.log: ${docker_files}
	mkdir -p log
	${dc} build | tee log/build.log | tee log/build.log | tee log/build_${shell date "+%Y%m%d-%H%M%S"}.log 

build: log/build.log

up: build
	${dc} up -d

down:
	${dc} down 

cycle: down build up

