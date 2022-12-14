/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async headers() {
    return [{
      source: '/',
      headers: [
        {
          key: 'Set-Cookie',
          value: `NMIdentificationToken=d7318602-0780-4b10-9a08-1f8b9fa96bd3; expires=Sat, 25 Dec 2022 16:26:40 GMT; path=/; secure; samesite=none; httponly`,
        }
      ],
    }]
  }
}

module.exports = nextConfig
