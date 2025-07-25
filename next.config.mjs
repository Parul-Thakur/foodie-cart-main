/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        unoptimized:true,
        remotePatterns:[
            {
                protocol:'https',
                hostname:'eu-west-2.graphassets.com',
                port:'',
                pathname:'/**'
            },
            {
                protocol:'https',
                hostname:'img.clerk.com',
                port:'',
                pathname:'/**'
            }
        ]
    }
};

export default nextConfig;
