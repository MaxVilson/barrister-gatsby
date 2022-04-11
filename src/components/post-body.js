import React from "react";
import tw from "twin.macro";
import { GatsbyImage } from "gatsby-plugin-image";
import { StructuredText } from "react-datocms";

const Wrapper = tw.div`max-w-2xl mx-auto`
const Post = tw.div``

export default function PostBody({ content }) {
  return (
    <Wrapper>
      <Post>
        <StructuredText
          data={content}
          renderBlock={({ record }) => {
            if (record.__typename === "DatoCmsImageBlock") {
              return <GatsbyImage image={record.image.gatsbyImageData} />;
            }
            return (
              <>
                <p>Don't know how to render a block!</p>
                <pre>{JSON.stringify(record, null, 2)}</pre>
              </>
            );
          }}
        />
      </Post>
    </Wrapper>
  );
}
