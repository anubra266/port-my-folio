import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import * as styles from './Screenshots.module.css';

const Screenshots = () => {
  const screenshots = useStaticQuery(graphql`
    query {
      screen1: file(relativePath: { eq: "templates/castform.png" }) {
        childImageSharp {
          original {
            src
          }
          gatsbyImageData(layout: FIXED, width: 400)
        }
      }
      screen2: file(relativePath: { eq: "templates/celebi.png" }) {
        childImageSharp {
          original {
            src
          }
          gatsbyImageData(layout: FIXED, width: 400)
        }
      }
      screen3: file(relativePath: { eq: "templates/gengar.png" }) {
        childImageSharp {
          original {
            src
          }
          gatsbyImageData(layout: FIXED, width: 400)
        }
      }
      screen4: file(relativePath: { eq: "templates/glalie.png" }) {
        childImageSharp {
          original {
            src
          }
          gatsbyImageData(layout: FIXED, width: 400)
        }
      }
      screen5: file(relativePath: { eq: "templates/onyx.png" }) {
        childImageSharp {
          original {
            src
          }
          gatsbyImageData(layout: FIXED, width: 400)
        }
      }
      screen6: file(relativePath: { eq: "templates/pikachu.png" }) {
        childImageSharp {
          original {
            src
          }
          gatsbyImageData(layout: FIXED, width: 400)
        }
      }
    }
  `);

  return (
    <div className="mt-24 mb-4">
      <div className="text-xl uppercase font-bold mb-8">
        Choose from various templates
      </div>

      <div className="flex w-full overflow-x-scroll">
        {Object.keys(screenshots).map((x) => (
          <a
            target="_blank"
            rel="noreferrer"
            className={styles.screenshot}
            key={screenshots[x].childImageSharp.original.src}
            href={screenshots[x].childImageSharp.original.src}
          >
            <span className="sr-only">Port My Folio Screenshot</span>
            <GatsbyImage
              image={screenshots[x].childImageSharp.gatsbyImageData}
              alt="Port My Folio Screenshot"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Screenshots;
