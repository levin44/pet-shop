import React from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import  styles from '../styles/breadcrumb.module.scss'

interface BreadcrumbProps {
  title: string;
}

const BreadcrumbComponent: React.FC<BreadcrumbProps> = ({ title }) => {
  return (
    <div className='bg-green'>
      <div className="container">
        <Breadcrumb className={styles.breadcrumb}>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/" active>
          {title}
        </Breadcrumb.Item>
          </Breadcrumb>
      </div>
    </div>

  );
};

export default BreadcrumbComponent;