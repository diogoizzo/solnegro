const nextConfig = {
    reactStrictMode: true,
    experimental: {
        images: {
            unoptimized: true,
        },
    },
    images: {
        loader: "custom",
    },
    async headers() {
        return [
            {
                source: "/:paths*",
                headers: [
                    { key: "Access-Control-Allow-Credentials", value: "true" },
                    {
                        key: "Access-Control-Allow-Origin",
                        value: "*",
                    },
                    {
                        key: "Access-Control-Allow-Methods",
                        value: "PUT, POST, PATCH, DELETE, GET",
                    },
                    {
                        key: "Access-Control-Allow-Headers",
                        value: "Origin, X-Requested-With, Content-Type, Accept, Authorization, X-CRSF-Token",
                    },
                ],
            },
        ];
    },
};

module.exports = nextConfig;
