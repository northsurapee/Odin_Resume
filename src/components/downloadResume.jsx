// import html2canvas from "html2canvas";
import "../styles/downloadButton.css";

export default function DownloadResume() {
//   function handleDownloadResume() {
//     const resumeElement = document.querySelector(".resume");
//     html2canvas(resumeElement).then((canvas) => {
//       const jpegDataUrl = canvas.toDataURL("image/jpeg");
//       const link = document.createElement("a");
//       link.href = jpegDataUrl;
//       link.download = "resume.jpeg";
//       link.click();
//     });
//   }

  return (
    <button className="download-resume" >
      <h3>
        <i className="fa-solid fa-arrow-up-right-from-square"></i>
        Download JPEG
      </h3>
    </button>
  );
}
