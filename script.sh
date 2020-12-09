echo '\n\nRequesting all users...'
    curl localhost:3000/users
echo '\n\nRequesting Eliseu'
    curl localhost:3000/users/3
echo '\n\n Requesting with wrong body'
    curl --silent -X POST \
            --data-binary '{"invalid": "data"}' \
           localhost:3000/users
echo '\n\n Creating Paulo'
    curl --silent -X POST \
            --data-binary '{"id": "57", "name": "Paulo"}' \
           localhost:3000/users
