import { Helmet } from 'react-helmet';
import { BsLayoutWtf } from 'react-icons/bs';
import { CgIfDesign } from 'react-icons/cg';
import { TiFlash } from 'react-icons/ti';
import { useTranslation } from 'react-i18next';
import React, { memo } from 'react';
import Hero from '../components/landing/Hero';
import Screenshots from '../components/landing/Screenshots';
import Wrapper from '../components/shared/Wrapper';

const Home = () => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Helmet>
        <title>{t('shared.appName')}</title>
        <link rel="canonical" href="http://localhost:8000" />
      </Helmet>

      <div className="container px-8 xl:px-0 text-center md:text-left mt-24">
        <Hero />

        <p className="leading-loose text-lg mt-16">
          Port My Folio is a free and open source resume builder that’s built to
          make the mundane tasks of creating, updating and sharing your resume
          as easy as 1, 2, 3. With this app, you can create multiple resumes,
          share them with recruiters through a unique link and print as PDF, all
          for free, no advertisements, without losing the integrity and privacy
          of your data.
        </p>

        <Screenshots />

        <div className="pt-8 grid lg:grid-cols-2 lg:gap-x-10">
          <Feature icon={TiFlash} title="Register in a Flash">
            It only takes a couple of seconds to start using our online resume
            builder. The resume creator is offered completely through our
            website, meaning there is no software to download.
          </Feature>
          <Feature icon={BsLayoutWtf} title="Choose a resume Layout">
            You get to choose between several design options with our selection
            of free resume templates. This helps you match your resume to the
            type of company and position you want.
          </Feature>
          <Feature icon={CgIfDesign} title="Develop and Optimize Your Content">
            Each resume template is organized into major content sections that
            you fill in while optimization tools guide you through the process.
            And adding or removing a specific section based on your needs is no
            problem and you get layout and content suggestions so that your
            resume looks perfect. Export and Send Once your content is finished,
            you can export your resume in PDF from the free resume builder. Your
            latest version is saved and you can always go back to make edits.
          </Feature>
          <Feature icon={TiFlash} title="Export and Send">
            Once your content is finished, you can export your resume in PDF or
            JSON from the free resume builder. You can also get a short
            shareable link. Your latest version is saved and you can always go
            back to make edits.
          </Feature>
        </div>

        <footer className="my-24">
          <p className="text-primary-500">
            Licensed under <a href="/">MIT</a>
            <br />
            Made with love by Abraham Aremu, Alabi-Williams Isaac and Linus
            Williams
          </p>
        </footer>
      </div>
    </Wrapper>
  );
};

const Feature = ({ icon: Icon, title, children }) => (
  <div className="mt-16">
    <div className="flex items-center">
      <Icon size="18px" className="text-primary-900 mr-4" />
      <div className="text-3xl">{title}</div>
    </div>
    <p className="mt-6 text-lg leading-loose">{children}</p>
  </div>
);

export default memo(Home);
