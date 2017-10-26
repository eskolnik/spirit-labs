Huey.configure do |config|
  # Huey now uses the Philips Hue API to discover local bridges, but you can
  # specify the Hue IP manually if your Huey server is not on your
  # local network.

  #specifies my bridge. REPLACE WITH ENV VARIABLE
  config.hue_ip = ENV['HUE_IP']

  # Change this if you don't like the included uuid.
  #ALSO REPLACE WITH ENV VARIABLE
  config.uuid = ENV['HUE_UUID']

  # SSDP is disabled by default. Do not enable it unless you have a compelling
  # reason to do so.
  # config.ssdp = true

  # Specify the SSDP IP. Do not use this unless you're using SSDP broadcasting
  # at a non-standard IP.
  # config.ssdp_ip = '239.255.255.250'

  # As per the above, but for a non-standard port.
  # config.ssdp_port = 1900

  # If your SSDP connections keep timing out, increase this.
  # config.ssdp_ttl = 1
end
