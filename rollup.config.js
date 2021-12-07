import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import { babel } from '@rollup/plugin-babel';
import del from 'rollup-plugin-delete'

export default {    


    input: 'src/Index.tsx',
    output: {
        dir:'dist',
        format:'esm',
        preserveModules: true,
        sourcemap: true,
    },
    plugins: [
        del({ targets: 'dist' }),
        resolve(),
        commonjs(),
        typescript(),
   ],
    external: ['react', 'react-dom']
}