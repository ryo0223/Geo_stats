import * as Three from "three";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const scene = new Three.Scene();
const loader = new GLTFLoader();

loader.load( 'path/to/model.glb', function ( gltf ) {

	scene.add( gltf.scene );

}, undefined, function ( error ) {

	console.error( error );

} );
print('test')