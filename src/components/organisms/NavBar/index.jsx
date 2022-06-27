import React from 'react'
import Image from 'next/image'
import logo from '@/logo/amikom.png'
import Container from '@/atoms/Container'
import AnchorCollapse from '@/atoms/Anchor/AnchorCollapse'
import AnchorCollapseCard from '@/atoms/Anchor/AnchorCollapseCard'
import { FAKULTAS_LINKS, FES_LINKS, FIK_LINKS, FST_LINKS, ORGANISASI_LINKS, PROFIL_LINKS } from '@/utils/constant'

const NavBar = () => {
    return (
        <Container cardClassName="bg-primary py-5">
            <div className="flex justify-between items-center">
                <a href="#">
                    <Image src={logo} height="50" width="150"  />
                </a>
                <div className="flex justify-end text-white">
                    <AnchorCollapse
                        title="Profil"
                        className="mr-8"
                        href="#"
                    >
                        <AnchorCollapseCard
                            links={PROFIL_LINKS}
                        />
                    </AnchorCollapse>
                    <a href="#" className='mr-8'>Award</a>
                    <AnchorCollapse
                        title="Fakultas"
                        className="mr-8"
                        href="#"
                    >
                        <AnchorCollapseCard
                            links={FAKULTAS_LINKS}
                        />
                    </AnchorCollapse>
                    <AnchorCollapse
                        title="Prodi"
                        className="mr-8"
                        href="#"
                    >
                        <AnchorCollapseCard
                            title="FIK"
                            links={FIK_LINKS}
                        />
                        <AnchorCollapseCard
                            title="FES"
                            className="mt-6"
                            links={FES_LINKS}
                        />
                        <AnchorCollapseCard
                            title="FST"
                            className="mt-6"
                            links={FST_LINKS}
                        />
                    </AnchorCollapse>
                    <AnchorCollapse
                        title="Organisasi"
                        className="mr-8"
                        href="#"
                    >
                        <AnchorCollapseCard
                            links={ORGANISASI_LINKS}
                        />
                    </AnchorCollapse>
                    <a href="#" className=''>PMB</a>
                </div>
            </div>
        </Container>
    )
}

export default NavBar