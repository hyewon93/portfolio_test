import {Document, Page, pdfjs} from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PDFViewer = ({pdfFile}) => {

    return (
        <>
            <Document file={pdfFile}>
                <Page scale={1} pageNumber={1}/>
            </Document>
        </>
    )
}

export default PDFViewer;