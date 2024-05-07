interface IImageMetodata {
        src: string;
        width: number;
        height: number;
};

export interface IImageProps {
        metadata: IImageMetodata;
        alt: string;
        isAboveTheFold?: boolean;
};