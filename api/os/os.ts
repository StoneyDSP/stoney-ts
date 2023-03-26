import * as os from "os";

/**
 * Returns the machine type as a string, such as arm, aarch64, mips, mips64, ppc64, ppc64le, s390, s390x, i386, i686, x86_64.
 *
 * On POSIX systems, the machine type is determined by calling uname(3).
 *
 * On Windows, RtlGetVersion() is used, and if it is not available, GetVersionExW() will be used.
 *
 * See https://en.wikipedia.org/wiki/Uname#Examples for more information.
 */
export const machine = os.machine().toString();


/**
 * Returns a string identifying the operating system platform for which the Node.js binary was compiled. The value is set at compile time. Possible values are 'aix', 'darwin', 'freebsd','linux','openbsd', 'sunos', and 'win32'.
 *
 * The return value is equivalent to process.platform.
 *
 * The value 'android' may also be returned if Node.js is built on the Android operating system. Android support is experimental.
 */
export const platform = os.platform().toString();
