FROM ubuntu:20.04

# Install desktop environment
RUN apt-get update && \
    DEBIAN_FRONTEND=noninteractive apt-get install -y xfce4 xfce4-terminal && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Install VNC server
RUN apt-get update && \
    DEBIAN_FRONTEND=noninteractive apt-get install -y tightvncserver && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Set VNC password
RUN mkdir -p $HOME/.vnc && \
    echo "password" | vncpasswd -f > $HOME/.vnc/passwd && \
    chmod 600 $HOME/.vnc/passwd

# Start VNC server
ENTRYPOINT ["tightvncserver", "-geometry", "1600x900", "-depth", "24"]
