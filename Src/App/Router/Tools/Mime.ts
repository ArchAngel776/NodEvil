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

            case "html":

                return MIME_TYPE.TEXT_HTML;

            case "xml":

                return MIME_TYPE.TEXT_XML;

            case "css":

                return MIME_TYPE.TEXT_CSS;

            case "jpg":

                return MIME_TYPE.IMAGE_JPEG;

            case "png":

                return MIME_TYPE.IMAGE_PNG;

            case "gif":

                return MIME_TYPE.IMAGE_GIF;

            case "ico":

                return MIME_TYPE.IMAGE_X_ICON;

            case "mp4":

                return MIME_TYPE.VIDEO_MP4;

            case "mp3":

                return MIME_TYPE.AUDIO_MPEG;

            case "js":

                return MIME_TYPE.APPLICATION_JAVASCRIPT;

            case "json":

                return MIME_TYPE.APPLICATION_JSON;

            default:

                return MIME_TYPE.TEXT_PLAIN;
        
        }

    }

}