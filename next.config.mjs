/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // domains: ['images.pexels.com']
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**"
            }
        ]
    },
};

export default nextConfig;
