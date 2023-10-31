/*
 * Copyright (c) 2023. Arkin Solomon.
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *     http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
 * either express or implied limitations under the License.
 */
import '../css/Footer.scss';
import ThemeButton from './ThemeButton';

function Footer() {
  return (
    <footer>
      &copy; 2023 Arkin Solomon. X-Pkg is an open source project. view the code on <a href="https://github.com/ArkinSolomon/xpkg-developer-portal">GitHub</a>. <ThemeButton />
    </footer>
  );
}

export default Footer;