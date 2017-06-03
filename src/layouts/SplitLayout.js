import React from 'react';
import LeftSidebar from '../components/views/leftsidebar/LeftSidebar';

export const SplitLayout = ({ children, params }) =>
  <div>
    <aside>
      <LeftSidebar params={params} />
    </aside>
    <main>
      {children}
    </main>
  </div>;