import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from '@nextui-org/navbar';
import ThemeSwitch from './ThemeSwitch';
import Link from 'next/link';

export default function TopNavbar() {
  return (
    <Navbar position="static" isBordered>
      <NavbarBrand>{/* TODO */}</NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-14" justify="center">
        <NavbarItem>
          <Link href={'/'}>Home</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href={'/blog'}>Blog</Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
