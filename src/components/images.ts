import _ from 'lodash';

interface IImage {
	[ key:string ]: any;
}

function importAll( r:any ) {

	const images:IImage = {};

	r.keys().map(( key:string, ...params:any[] ) => {

		return {
			source: key,
			import: r([ key ]),
		}

	}).forEach(( value:{ source:string, import:string } ) => {

		const source = value.source

			// remove fileType
			.split(".").slice(0, -1).join("-")
			.split("_").join("-")
			.split(" ").join("-")

			// separate by folder
			.split("/").slice(1).map(name => {

				// convert dash names to camelCase
				return name.split("-").map(( part:string, index:number ) => {
					return index === 0 ? part : part[0].toUpperCase() + part.substr(1);
				}).join('')

			// assemble with dots not slashes
			}).join(".");

		_.set( images, source, value.import );

	});

	return images;

}

const imports = require.context('../images', true, /\.(png|jpe?g|svg)$/);

const image = importAll( imports );

export default image;
