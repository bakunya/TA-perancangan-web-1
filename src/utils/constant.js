export const PRODI = 'PRODI'
export const PROFIL = 'PROFIL'
export const FAKULTAS = 'FAKULTAS'
export const ORGANISASI = 'ORGANISASI'

export const FIK = 'FIK'
export const FES = 'FES'
export const FST = 'FST'

export const FAKULTAS_LIST = {
    fik: 'fik',
    fst: 'fst',
    fes: 'fes',
}

export const PRODI_LIST = {
        d3ti: 'd3ti',
        d3mi: 'd3mi',
        s1tk: 's1tk',
        s1inf: 's1inf',
        s1tinf: 's1tinf',
        s1si: 's1si',
        akuntansi: 'akuntansi',
        ekonomi: 'ekonomi',
        hi: 'hi',
        ip: 'ip',
        kwu: 'kwu',
        arsitektur: 'arsitektur',
        geo: 'geo',
        pwk: 'pwk',
}

export const PROFIL_LIST = {
    'sejarah': 'sejarah',
    'visi-misi': 'visi-misi',
    'nilai-tujuan': 'nilai-tujuan',
}

export const ORGANISASI_LIST = {
    AFC: 'AFC',
    BEM: 'BEM',
    AMCC: 'AMCC',
    KOMA: 'KOMA',
    MAYPALA: 'MAYPALA',
}



export const FIK_LINKS = [
    {
        key: PRODI_LIST.d3ti,
        href: `/prodi/${PRODI_LIST.d3ti}`,
        title: 'D3 Teknik Informatika',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint voluptate, culpa magnam adipisci nemo numquam minima vitae laudantium nisi, ex quis recusandae nostrum ipsa, magni a maiores modi excepturi. At!',
    },
    {
        key: PRODI_LIST.d3mi,
        href: `/prodi/${PRODI_LIST.d3mi}`,
        title: 'D3 Manajemen Informatika'
    },
    {
        key: PRODI_LIST.d3tk,
        href: `/prodi/${PRODI_LIST.s1tk}`,
        title: 'Teknik Komputer'
    },
    {
        key: PRODI_LIST.s1inf,
        href: `/prodi/${PRODI_LIST.s1inf}`,
        title: 'Informatika'
    },
    {
        key: PRODI_LIST.s1tinf,
        href: `/prodi/${PRODI_LIST.s1tinf}`,
        title: 'Teknologi Informasi'
    },
    {
        key: PRODI_LIST.s1si,
        href: `/prodi/${PRODI_LIST.s1si}`,
        title: 'Sistem Informasi'
    },
]

export const FES_LINKS = [
    {
        key: PRODI_LIST.akuntansi,
        href: `/prodi/${PRODI_LIST.akuntansi}`,
        title: 'AKUNTANSI',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint voluptate, culpa magnam adipisci nemo numquam minima vitae laudantium nisi, ex quis recusandae nostrum ipsa, magni a maiores modi excepturi. At!',
    },
    {
        key: PRODI_LIST.ekonomi,
        href: `/prodi/${PRODI_LIST.ekonomi}`,
        title: 'EKONOMI'
    },
    {
        key: PRODI_LIST.hi,
        href: `/prodi/${PRODI_LIST.hi}`,
        title: 'HUBUNGAN INTERNASIONAL'
    },
    {
        key: PRODI_LIST.ip,
        href: `/prodi/${PRODI_LIST.ip}`,
        title: 'ILMU PEMERINTAHAN'
    },
    {
        key: PRODI_LIST.kwu,
        href: `/prodi/${PRODI_LIST.kwu}`,
        title: 'KEWIRAUSAHAAN'
    },
]

export const FST_LINKS = [
    {
        key: PRODI_LIST.arsitektur,
        href: `/prodi/${PRODI_LIST.arsitektur}`,
        title: 'ARSITEKTUR',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint voluptate, culpa magnam adipisci nemo numquam minima vitae laudantium nisi, ex quis recusandae nostrum ipsa, magni a maiores modi excepturi. At!',
    },
    {
        key: PRODI_LIST.geo,
        href: `/prodi/${PRODI_LIST.geo}`,
        title: 'GEOGRAFI'
    },
    {
        key: PRODI_LIST.pwk,
        href: `/prodi/${PRODI_LIST.pwk}`,
        title: 'PERENCANAAN WILAYAH DAN KOTA'
    },
]

export const PROFIL_LINKS = [
    {
        href: '/profil',
        title: 'Profil',
        desc: 'Universitas Amikom Yogyakarta telah meraih 80 penghargaan internasional dan lebih dari 210 penghargaan nasional serta menghasilkan 24% lulusannya sebagai pengusaha (Business Placement Center AMIKOM, 2014). Perguruan Tinggi telah terakreditasi institusi B dan telah mendapatkan sertifikasi ISO 2009.'
    },
    {
        key: PROFIL_LIST.sejarah,
        href: `/profil/${PROFIL_LIST.sejarah}`,
        title: 'Sejarah'
    },
    {
        key: PROFIL_LIST["visi-misi"],
        href: `/profil/${PROFIL_LIST["visi-misi"]}`,
        title: 'Visi & Misi'
    },
    {
        key: PROFIL_LIST["nilai-tujuan"],
        href: `/profil/${PROFIL_LIST["nilai-tujuan"]}`,
        title: 'Nilai & Tujuan'
    },
]

export const FAKULTAS_LINKS = [
    {
        key: FAKULTAS_LIST.fik,
        href: `/fakultas/${FAKULTAS_LIST.fik}`,
        title: 'Fakultas Ilmu Komputer',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint voluptate, culpa magnam adipisci nemo numquam minima vitae laudantium nisi, ex quis recusandae nostrum ipsa, magni a maiores modi excepturi. At!',
        child: FIK,
    },
    {
        key: FAKULTAS_LIST.fst,
        href: `/fakultas/${FAKULTAS_LIST.fst}`,
        title: 'Fakultas Sains Teknologi',
        child: FST,
    },
    {
        key: FAKULTAS_LIST.fes,
        href: `/fakultas/${FAKULTAS_LIST.fes}`,
        title: 'Fakultas Ekonomi & Sosial',
        child: FES,
    },
]

export const ORGANISASI_LINKS = [
    {
        key: ORGANISASI_LIST['AFC'],
        href: `/organisasi/${ORGANISASI_LIST['AFC']}`,
        title: 'AFC',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint voluptate, culpa magnam adipisci nemo numquam minima vitae laudantium nisi, ex quis recusandae nostrum ipsa, magni a maiores modi excepturi. At!'
    },
    {
        key: ORGANISASI_LIST['BEM'],
        href: `/organisasi/${ORGANISASI_LIST['BEM']}`,
        title: 'BEM',
    },    
    {
        key: ORGANISASI_LIST['AMCC'],
        href: `/organisasi/${ORGANISASI_LIST['AMCC']}`,
        title: 'AMCC',
    },
    {
        key: ORGANISASI_LIST['KOMA'],
        href: `/organisasi/${ORGANISASI_LIST['KOMA']}`,
        title: 'KOMA',
    },
    {
        key: ORGANISASI_LIST['MAYPALA'],
        href: `/organisasi/${ORGANISASI_LIST['MAYPALA']}`,
        title: 'MAYPALA',
    },
]

export const SOSMED_LINKS = [
    {
        href: 'http://twitter.com/amikomjogja',
        title: 'Twitter',
    },
    {
        href: 'http://instagram.com/amikomjogja',
        title: 'Instagram',
    },
    {
        href: 'https://www.facebook.com/amikomjogja/',
        title: 'Facebook',
    },
    {
        href: 'https://www.youtube.com/channel/UCNMwEZ8Y3JIod-d22o8yxZQ?view_as=subscriber',
        title: 'Youtube',
    },
]

export const CONTACT_LINKS = [
    
    {
        title: "Email",
        contact: "Yayasan@amikom.ac.id",
    },
    {
        title: "Email",
        contact: "amikom@amikom.ac.id",
    },
    {
        title: "Telp",
        contact: "(0274) 884201 - 207",
    },
    {
        title: "Fax",
        contact: "(0274) 884208",
    },
]