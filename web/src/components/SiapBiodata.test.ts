import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import SiapBiodata from './SiapBiodata.vue';

const profile = {
  nama: 'MUHAMAD KEMAL FAZA',
  nim: '24060124120013',
  prodi: 'Informatika S1',
  fakultas: 'SAINS DAN MATEMATIKA',
  angkatan: '2024',
  status: 'AKTIF',
  semesterBerjalan: '2026/2027 Ganjil',
  tempatLahir: 'KUALA KAPUAS',
  tanggalLahir: '26 Mei 2006',
  nik: '620301 260506 0001',
  namaIbu: 'SITI HAJJAH MARIA ULFAH',
  kodeKewarganegaraan: 'ID',
  nomorHp: '089693048519',
  emailSso: 'kemalfaza26@students.undip.ac.id',
  emailPribadi: 'kemalfaza26@gmail.com',
  alamatAsal: 'Jalan Kapuas, Kab. Kapuas, Kalimantan Tengah 73515',
  alamatSekarang: 'Jl. Tanjungsari Dalam III No.8, Semarang 50269',
};

describe('SiapBiodata', () => {
  it('renders the biodata fields', () => {
    const w = mount(SiapBiodata, { props: { profile } });
    expect(w.text()).toContain('24060124120013');
    expect(w.text()).toContain('KUALA KAPUAS');
    expect(w.text()).toContain('620301 260506 0001');
    expect(w.text()).toContain('kemalfaza26@students.undip.ac.id');
    expect(w.text()).toContain('Jalan Kapuas');
    expect(w.text()).toContain('Tanjungsari');
  });

  it('masks Nama Ibu until revealed', async () => {
    const w = mount(SiapBiodata, { props: { profile } });
    expect(w.text()).toContain('********');
    expect(w.text()).not.toContain('SITI HAJJAH');
    await w.findAll('button').find((b) => b.text().includes('Tampilkan'))!.trigger('click');
    expect(w.text()).toContain('SITI HAJJAH MARIA ULFAH');
  });

  it('renders a placeholder state when profile is null', () => {
    const w = mount(SiapBiodata, { props: { profile: null } });
    expect(w.text()).toContain('—');
  });
});