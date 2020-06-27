FROM golang:alpine as builder

LABEL maintainer="Kenichi Okiebisu <kenichikona@gmail.com>"

# Install Git
RUN apk update && apk add --no-cache git

# Set the current working directory inside the container
WORKDIR /app

# Copy go.mod, go.sum into the container's app directory
COPY go.mod go.sum ./

# Install all the dependencies
RUN go mod download

# Copy all the files to the container's app directory
COPY . .

# Build the Go app inside the container
RUN CGO_ENABLED=0 GOOS=linux go build -a -installsuffix cgo -o main .

## Production
FROM alpine:latest
RUN apk --no-cache add ca-certificates

WORKDIR /root/

# Move the entry point of the file (main.go) into the root folder 
COPY --from=builder /app/main .

# Move the .env file to enable reading environmental variables within program
COPY --from=builder /app/.env .

EXPOSE 8080

CMD ["./main"]

