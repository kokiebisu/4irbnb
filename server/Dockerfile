# Larger image which includes all of the dependencies 
# that we need to compilete the program
FROM golang:1.14 AS builder

WORKDIR /go/src/gonebnb

# Copies all the code in the local directory to the image
COPY . .
# We specify that we now wish to execute 
# any further commands inside our /app
# directory
RUN go mod download

# Builds the application as a staticly linked one, to allow it to run on alpine
RUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -a -installsuffix cgo -o app .

# Moving the binary to the 'final Image' to make it smaller
FROM alpine:latest AS production

WORKDIR /app

# Copies only what is needed from the builder stage
COPY --from=build /go/src/gonebnb/app .

EXPOSE 4000

# Our start command which kicks off
# our newly created binary executable
CMD ["./app"]