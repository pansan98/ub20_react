import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import reactRefresh from '@vitejs/plugin-react-refresh';

export default defineConfig({
    plugins: [
        // laravel({
        //     input: [
        //         'resources/react/src/main.jsx',
        //     ],
        //     refresh: true,
        // }),
        laravel([
            'resources/react/src/main.jsx'
        ]),
        react()
        //reactRefresh()
    ],
});
