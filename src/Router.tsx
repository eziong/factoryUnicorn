import { Route, Routes } from 'react-router-dom'

import { Company } from 'pages/Company';
import { Customer } from 'pages/Customer';
import { InquiryDetail } from 'pages/InquiryDetail';
import { MyInquiries } from 'pages/MyInquiries';
import { NotFound } from 'pages/NotFound';

export function Router() {
  return (
      <Routes>
        <Route path='/company'>
          <Route index element={<Company />} />
          <Route path='inquiry' element={<InquiryDetail />} />
        </Route>
        <Route path='/customer'>
          <Route index element={<Customer />} />
          <Route path='myInquiries' element={<MyInquiries />} />
          <Route path='myInquiries/inquiry' element={<InquiryDetail />} />
        </Route>
        <Route path='/*' element={<NotFound />} />
      </Routes>
  );
}