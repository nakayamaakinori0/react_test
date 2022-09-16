import {
  TwitterShareButton,
  FacebookShareButton,
  LineShareButton,
  HatenaShareButton,
  TwitterIcon,
  FacebookIcon,
  LineIcon,
  HatenaIcon,
} from "react-share";
import Helmet from "react-helmet";

const url = "https://localhost:3000";
const title = "あきのりの検証";
const description = "これはあきのりの検証です。";
const imagePath = "testImage.jpeg";
export default function Share() {
  return (
    <div>
      <Helmet>
        <meta property="og:title" content={title}/>
        <meta property="og:description" content={description} />

        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="あきのりの検証サイト" />
        <meta property="og:image" content={imagePath} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@RdPM4rnUuDFosmk" />
      </Helmet>
        <TwitterShareButton url={url} title="ページタイトル">
          <TwitterIcon size={30} round={true} />
        </TwitterShareButton>

        <FacebookShareButton url={url} quote="ページタイトル">
          <FacebookIcon size={30} round={true} />
        </FacebookShareButton>

        <LineShareButton url={url} title="ページタイトル">
          <LineIcon size={30} round={true} />
        </LineShareButton>

        <HatenaShareButton url={url} title="ページタイトル">
          <HatenaIcon size={30} round={true} />
        </HatenaShareButton>
    </div>
  );
}
