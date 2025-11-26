export default function Head() {
  const title = "Go Global with Confidence | Ideolingo Translation & Localization";
  const description =
    "Ideolingo transforms your words into powerful messages that connect, engage, and convert in any market. Expert linguists, project managers, and cultural consultants delivering fast, accurate translations and complete localization strategies.";
  const url = "https://ideolingo.com/";

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta name="keywords" content="translation, localization, transcreation, interpretation, multilingual DTP, Ideolingo" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
    </>
  );
}
