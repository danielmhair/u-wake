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
    echo "$VNC_PASSWORD" | vncpasswd -f > $HOME/.vnc/passwd && \
    chmod 600 $HOME/.vnc/passwd

# Expose VNC port
EXPOSE 5901

# Start VNC server
ENTRYPOINT ["tightvncserver", "-geometry", "$VNC_GEOMETRY", "-depth", "$VNC_DEPTH"]
