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
    typescript: {
        ignoreBuildErrors: true
    }
};

export default nextConfig;
