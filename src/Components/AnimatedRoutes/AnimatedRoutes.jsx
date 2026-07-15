import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import PageTransition from '../PageTransition/PageTransition';
import HomePageRoutes from '../HomePage/HomePageRoutes';
import AboutUs from '../AboutUs/AboutUs';
import AllClients from '../OthersComponents/Clients/AllClients/AllClients';
import AllModules from '../OthersComponents/Modules/AllModules/AllModules';
import IndusriesWiseModules from '../OthersComponents/Modules/IndusriesWiseModules/IndusriesWiseModules';
import SingleModule from '../OthersComponents/Modules/SingleModule/SingleModule';
import RealEstateCRM from '../OthersComponents/Products/RealEstateCRM/RealEstateCRM';
import RealEstateCRMDetailPage from '../OthersComponents/Products/RealEstateCRM/DetailPage';
import PrepDesk from '../OthersComponents/Products/PrepDesk/PrepDesk';
import PrepDeskDetailPage from '../OthersComponents/Products/PrepDesk/DetailPage';
import PrepCam from '../OthersComponents/Products/PrepCam/PrepCam';
import PrepCamDetailPage from '../OthersComponents/Products/PrepCam/DetailPage';
import PrepWhatsBot from '../OthersComponents/Products/PrepWhatsBot/PrepWhatsBot';
import PrepWhatsBotDetailPage from '../OthersComponents/Products/PrepWhatsBot/DetailPage';
import PrepCommerce from '../OthersComponents/Products/PrepCommerce/PrepCommerce';
import PrepCommerceDetailPage from '../OthersComponents/Products/PrepCommerce/DetailPage';
import PrepJewellery from '../OthersComponents/Products/PrepJewellery/PrepJewellery';
import PrepJewelleryDetailPage from '../OthersComponents/Products/PrepJewellery/DetailPage';
import PrepSchool from '../OthersComponents/Products/PrepSchool/PrepSchool';
import PrepSchoolDetailPage from '../OthersComponents/Products/PrepSchool/DetailPage';
import Policies from '../OthersComponents/Policies/Policies';
import NotFound from '../NotFound/NotFound';
// import CreateOwnPortal from '../CreateOwnPortal/CreateOwnPortal';
import ResetPassword from '../ResetPassword/ResetPassword';

import WrapIndex from '../DynamicPortal/StepByStepComponents/WrapIndex';
import Portal from '../DynamicPortal/StepByStepComponents/Portal/Portal';
const AnimatedRoutes = () => {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route
                    path="/"
                    element={
                        <PageTransition>
                            <HomePageRoutes />
                        </PageTransition>
                    }
                />
                <Route
                    path="/about"
                    element={
                        <PageTransition>
                            <AboutUs />
                        </PageTransition>
                    }
                />
                <Route
                    path="/our-clients"
                    element={
                        <PageTransition>
                            <AllClients />
                        </PageTransition>
                    }
                />
                <Route
                    path="/modules"
                    element={
                        <PageTransition>
                            <AllModules />
                        </PageTransition>
                    }
                />
                <Route
                    path="/services"
                    element={
                        <PageTransition>
                            <AllModules />
                        </PageTransition>
                    }
                />
                <Route
                    path="/industry/:industryName"
                    element={
                        <PageTransition>
                            <IndusriesWiseModules />
                        </PageTransition>
                    }
                />
                <Route
                    path="/module/:moduleId"
                    element={
                        <PageTransition>
                            <SingleModule />
                        </PageTransition>
                    }
                />
                <Route
                    path="/products/real-estate-crm"
                    element={
                        <PageTransition>
                            <RealEstateCRM />
                        </PageTransition>
                    }
                />
                <Route
                    path="/products/real-estate-crm/:slug"
                    element={
                        <PageTransition>
                            <RealEstateCRMDetailPage />
                        </PageTransition>
                    }
                />
                <Route
                    path="/products/prepdesk"
                    element={
                        <PageTransition>
                            <PrepDesk />
                        </PageTransition>
                    }
                />
                <Route
                    path="/products/prepdesk/:slug"
                    element={
                        <PageTransition>
                            <PrepDeskDetailPage />
                        </PageTransition>
                    }
                />
                <Route
                    path="/products/prepcam"
                    element={
                        <PageTransition>
                            <PrepCam />
                        </PageTransition>
                    }
                />
                <Route
                    path="/products/prepcam/:slug"
                    element={
                        <PageTransition>
                            <PrepCamDetailPage />
                        </PageTransition>
                    }
                />
                <Route
                    path="/products/prepwhatsbot"
                    element={
                        <PageTransition>
                            <PrepWhatsBot />
                        </PageTransition>
                    }
                />
                <Route
                    path="/products/prepwhatsbot/:slug"
                    element={
                        <PageTransition>
                            <PrepWhatsBotDetailPage />
                        </PageTransition>
                    }
                />
                <Route
                    path="/products/prepcommerce"
                    element={
                        <PageTransition>
                            <PrepCommerce />
                        </PageTransition>
                    }
                />
                <Route
                    path="/products/prepcommerce/:slug"
                    element={
                        <PageTransition>
                            <PrepCommerceDetailPage />
                        </PageTransition>
                    }
                />
                <Route
                    path="/products/prepjewellery"
                    element={
                        <PageTransition>
                            <PrepJewellery />
                        </PageTransition>
                    }
                />
                <Route
                    path="/products/prepjewellery/:slug"
                    element={
                        <PageTransition>
                            <PrepJewelleryDetailPage />
                        </PageTransition>
                    }
                />
                <Route
                    path="/products/prepschool"
                    element={
                        <PageTransition>
                            <PrepSchool />
                        </PageTransition>
                    }
                />
                <Route
                    path="/products/prepschool/:slug"
                    element={
                        <PageTransition>
                            <PrepSchoolDetailPage />
                        </PageTransition>
                    }
                />
                <Route
                    path="/:policyType"
                    element={
                        <PageTransition>
                            <Policies />
                        </PageTransition>
                    }
                />

                <Route
                    path="/reset"
                    element={
                        <PageTransition>
                            <ResetPassword />
                        </PageTransition>
                    }
                />
                <Route
                    path="/creating-portal"
                    element={
                        <PageTransition>
                            <WrapIndex />
                        </PageTransition>
                    }
                />
                <Route
                    path="*"
                    element={
                        <PageTransition>
                            <NotFound />
                        </PageTransition>
                    }
                />
                <Route
                    path="/portal"
                    element={
                        <PageTransition>
                            <Portal />
                        </PageTransition>
                    }
                />

            </Routes>
        </AnimatePresence>
    );
};

export default AnimatedRoutes; 