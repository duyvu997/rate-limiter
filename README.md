# rate-limiter
a simple rate limit


# start Redis

docker run -d -p 6379:6379 --name rd redis

# test command execution

```bash
curl --location 'http://localhost:7005/ping' --header 'user_id: 111112' 
```