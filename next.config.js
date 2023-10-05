/** @type {import('next').NextConfig} */
module.exports = {
  // for SSG
  // output: 'export'
  images: {
    remotePatterns: [toRemotePattern(process.env.CMS_IMAGE_PATTERN)]
  }
};

function toRemotePattern(urlString) {
  console.log(process.env)
  console.log({urlString});
  const url = new URL(urlString);

  return {
    protocol: url.protocol.replace(':', ''),
    hostname: url.hostname,
    port: url.port,
    pathname: url.pathname
  };
}
