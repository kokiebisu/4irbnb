import { Header } from '../../components/organisms/header/header.component';
import homes from '../../styles/homes.module.scss';
import space from '../../styles/space.module.scss';
import React from 'react';
import layout from '../../styles/layout.module.scss';
import { Section } from '../../components/organisms/section/section.component';
import { Footer } from '../../components/organisms/footer/footer.component';
import { Bar } from '../../components/organisms/bar/bar.component';
import color from '../../styles/color.module.scss';
import responsive from '../../styles/responsive.module.scss';
import { useRouter } from 'next/router';
import { Template } from '../../components/templates/template.component';

const Homes = () => {
  const router = useRouter();
  const {
    type,
    city,
    stayType,
    characteristics,
  }: {
    type?: string;
    city?: string;
    stayType?: string[] | string;
    characteristics?: string;
  } = router.query;

  return (
    <Template
      type={type}
      city={city}
      stayType={stayType}
      characteristics={characteristics}
    />
  );
};

export default Homes;
