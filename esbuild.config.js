import esbuildServe from "esbuild-serve";


esbuildServe(
    {
        logLevel: "info",
        entryPoints: ["src/app.tsx"],
        bundle: true,
        outfile: "public/dist/out.js",
        target: ['chrome58', 'firefox57', 'safari11', 'edge18'],
        define: {
            "process.env.NODE_ENV": '"development"'
        },
        sourcemap: true,
    },
    { root: "public" }
);