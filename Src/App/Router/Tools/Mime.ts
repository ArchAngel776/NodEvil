import { EXTENSION } from "../../../Data/Statics/Extension";
import { MIME_TYPE } from "../../../Data/Statics/MimeType";
import { MimeType } from "../../../Data/Types/MimeType";

export default class Mime {

    protected path : string;

    public constructor(path : string) {

        this.path = path;

    }

    public getExtension() : string {

        const index = this.path.lastIndexOf(".");

        const ext = this.path.substr(index + 1);

        return ext;

    }

    public getMime() : MimeType {

        switch (this.getExtension()) {

            case EXTENSION.HTML:

                return MIME_TYPE.TEXT_HTML;

            case EXTENSION.XML:

                return MIME_TYPE.TEXT_XML;

            case EXTENSION.CSS:

                return MIME_TYPE.TEXT_CSS;

            case EXTENSION.JPG:

                return MIME_TYPE.IMAGE_JPEG;

            case EXTENSION.PNG:

                return MIME_TYPE.IMAGE_PNG;

            case EXTENSION.GIF:

                return MIME_TYPE.IMAGE_GIF;

            case EXTENSION.ICO:

                return MIME_TYPE.IMAGE_X_ICON;

            case EXTENSION.MP4:

                return MIME_TYPE.VIDEO_MP4;

            case EXTENSION.MP3:

                return MIME_TYPE.AUDIO_MPEG;

            case EXTENSION.JS:

                return MIME_TYPE.APPLICATION_JAVASCRIPT;

            case EXTENSION.JSON:

                return MIME_TYPE.APPLICATION_JSON;

            default:

                return MIME_TYPE.TEXT_PLAIN;
        
        }

    }

}