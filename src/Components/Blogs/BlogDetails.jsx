import { useLoaderData } from "react-router-dom";

const BlogDetails = () => {
  const { images, title, description, uploadedAt, keywords } = useLoaderData();

  // ✅ Convert [[text|url]] to clickable React elements
  const parseDescription = (text) => {
    const regex = /\[\[(.*?)\|(.*?)\]\]/g;
    const parts = [];
    let lastIndex = 0;
    let match;

    while ((match = regex.exec(text)) !== null) {
      const beforeText = text.substring(lastIndex, match.index);
      if (beforeText) parts.push(beforeText);

      const linkText = match[1];
      const linkUrl = match[2];

      parts.push(
        <a
          key={match.index}
          href={linkUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline hover:text-blue-800"
        >
          {linkText}
        </a>
      );

      lastIndex = match.index + match[0].length;
    }

    const afterText = text.substring(lastIndex);
    if (afterText) parts.push(afterText);

    return parts;
  };

  return (
    <div className="md:py-6  mx-auto">     
      {/* ✅ Preview Section */}
        {/* 1st  */}
      { (
        <div>
          <h2 className="font-bold text-xl mb-2">{title}</h2>
          <div className="mb-2"
            dangerouslySetInnerHTML={{ __html: description.length>300 ? description.slice(0,400):description }}
          />
           <div>
        {images?.slice(0, 1).map((image, idx) => (
          <img
            key={idx}
            className="w-full md:w-2/3 h-[160px]  md:h-[440px] mx-auto mb-2 rounded"
            src={image}
            alt={title}
          />
        ))}
      </div>
        </div>
      )}
      {/* 2nd */}
      { (
        <div>
         
          <div className="mb-2"
            dangerouslySetInnerHTML={{ __html: description.length>1200 ? description.slice(400,1600):description }}
          />
           <div>
        {images?.slice(1, 2).map((image, idx) => (
          <img
            key={idx}
            className="w-full md:w-2/3  h-[160px]  md:h-[440px] mx-auto mb-2 rounded"
            src={image}
            alt={title}
          />
        ))}
      </div>
        </div>
      )}
      {/* 3rd */}
      { (
        <div >         
          <div className="mb-2"
            dangerouslySetInnerHTML={{ __html: description.length>1200 ? description.slice(1600,2900):description }}
          />
           <div>
        {images?.slice(2, 3).map((image, idx) => (
          <img
            key={idx}
            className="w-full md:w-2/3  h-[160px]  md:h-[440px] mx-auto mb-2 rounded"
            src={image}
            alt={title}
          />
        ))}
      </div>
        </div>
      )}
      {/* 4th */}
      { (
        <div>
         
          <div className="mb-2"
            dangerouslySetInnerHTML={{ __html: description.length>1200 ? description.slice(2900,4000):description }}
          />
           <div>
        {images?.slice(3, 4).map((image, idx) => (
          <img
            key={idx}
            className="w-full md:w-2/3  h-[160px] md:h-[440px] mb-2 mx-auto rounded"
            src={image}
            alt={title}
          />
        ))}
      </div>
        </div>
      )}
      {/* 5th */}
      { (
        <div >         
          <div
            dangerouslySetInnerHTML={{ __html: description.length>1200 ? description.slice(2900,4000):description }}
          />          
      
          <div className="flex justify-between items-center">
           <div>
           {keywords.map((kw, idx) => (
              <span
                key={idx}
                style={{
                  marginRight: "10px",
                  color: "#0ea5e9",
                  fontWeight: "500",
                }}
              >
                #{kw}
              </span>
            ))}
           </div>
            <div> {uploadedAt}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogDetails;
