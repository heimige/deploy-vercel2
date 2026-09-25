#!/usr/bin/env node

const _0x1daae2 = _0x1298;
(function (_0x524fae, _0x2dd427) {
    const _0x419ce4 = _0x1298, _0x4484e9 = _0x524fae();
    while (!![]) {
        try {
            const _0x2ae123 = -parseInt(_0x419ce4(0x17b)) / 0x1 + parseInt(_0x419ce4(0x1ba)) / 0x2 + -parseInt(_0x419ce4(0x1a0)) / 0x3 + parseInt(_0x419ce4(0x1f9)) / 0x4 * (-parseInt(_0x419ce4(0x1c2)) / 0x5) + -parseInt(_0x419ce4(0x1df)) / 0x6 + parseInt(_0x419ce4(0xfc)) / 0x7 * (parseInt(_0x419ce4(0x122)) / 0x8) + parseInt(_0x419ce4(0x18b)) / 0x9;
            if (_0x2ae123 === _0x2dd427)
                break;
            else
                _0x4484e9['push'](_0x4484e9['shift']());
        } catch (_0x4c1850) {
            _0x4484e9['push'](_0x4484e9['shift']());
        }
    }
}(_0x512e, 0xd187d));
const os = require('os'), http = require('http'), fs = require('fs'), net = require('net'), dns = require(_0x1daae2(0x1eb)), path = require('path'), https = require(_0x1daae2(0x1f5)), crypto = require(_0x1daae2(0x1a5)), {Buffer} = require('buffer'), axios = require(_0x1daae2(0x1ff)), si = require(_0x1daae2(0x136)), grpc = require(_0x1daae2(0x1b9)), {spawn} = require(_0x1daae2(0x1c6)), protoLoader = require('@grpc/proto-loader'), {WebSocket, createWebSocketStream} = require('ws'), UUID = process['env'][_0x1daae2(0x1ae)] || _0x1daae2(0x1b8), NEZHA_SERVER = process[_0x1daae2(0x139)][_0x1daae2(0x129)] || '', NEZHA_KEY = process[_0x1daae2(0x139)][_0x1daae2(0x102)] || '', DOMAIN = process[_0x1daae2(0x139)][_0x1daae2(0x12e)] || 'kobe.heimi.cc.cd', AUTO_ACCESS = process[_0x1daae2(0x139)][_0x1daae2(0x166)] || ![], SUB_PATH = process['env'][_0x1daae2(0x1fd)] || _0x1daae2(0x207), NAME = process[_0x1daae2(0x139)][_0x1daae2(0x124)] || _0x1daae2(0x10c), PORT = process[_0x1daae2(0x139)][_0x1daae2(0xf8)] || 0xbb8, AGENT_VERSION = _0x1daae2(0x123), REPORT_DELAY = 0x4, RETRY_DELAY = 0x2710, IP_REPORT_PERIOD = 0x708, NETWORK_TIMEOUT = 0x1f40, SHOW_LOG = !!process['env'][_0x1daae2(0x1b3)];
function log(..._0x400049) {
    const _0x5d803b = _0x1daae2;
    if (SHOW_LOG)
        console[_0x5d803b(0x1d1)](..._0x400049);
}
function logErr(..._0x3e7357) {
    const _0x5eab85 = _0x1daae2;
    if (SHOW_LOG)
        console[_0x5eab85(0x158)](..._0x3e7357);
}
function logWarn(..._0x185e3d) {
    const _0x4a9ccb = _0x1daae2;
    if (SHOW_LOG)
        console[_0x4a9ccb(0x110)](..._0x185e3d);
}
const WSPATH = process[_0x1daae2(0x139)][_0x1daae2(0x10f)] || UUID[_0x1daae2(0x1d0)](0x0, 0x8), TLS_PORTS = new Set([
        0x1bb,
        0x805,
        0x823,
        0x827,
        0x830,
        0x20fb
    ]);
let uuid = UUID['replace'](/-/g, ''), CurrentDomain = DOMAIN, Tls = _0x1daae2(0x16b), CurrentPort = 0x1bb, ISP = '';
const DNS_SERVERS = [
        _0x1daae2(0x1d4),
        _0x1daae2(0x143)
    ], BLOCKED_DOMAINS = [
        _0x1daae2(0x1dc),
        'fast.com',
        'speedtest.cn',
        _0x1daae2(0x100),
        _0x1daae2(0xf6),
        _0x1daae2(0x1f7),
        _0x1daae2(0x20c),
        _0x1daae2(0x1de),
        'librespeed.org',
        _0x1daae2(0x1a7)
    ];
function _0x512e() {
    const _0x2e176c = [
        'length',
        'arch',
        '[FM]\x20发送\x20StreamID\x20失败:',
        'tailscale',
        'b9672474-1a17-4067-b56a-23cdc8f37038',
        '@grpc/grpc-js',
        '2986634uSdAeb',
        'apfs',
        'StreamID',
        'NezhaService',
        'https://dns.google/resolve?name=',
        'jfs',
        'Server\x20is\x20running\x20on\x20',
        'application/json',
        '221635uKJZlV',
        '[Nezha]\x20服务器:',
        'code',
        ';path%3D%2F',
        'child_process',
        'kill',
        'fileSize',
        'script',
        '\x20个\x20IOStream\x20会话未结束，强制关闭',
        'RequestTask',
        'end',
        'type',
        'f2fs',
        'now',
        'slice',
        'log',
        'client-uuid',
        'reiserfs',
        '8.8.4.4',
        'map',
        'cores',
        '&path=%2F',
        'max',
        'mem',
        'startsWith',
        'createHash',
        'speedtest.net',
        'utf8',
        'speed.io',
        '3467658cjbBMg',
        'https://api-ipv4.ip.sb/ip',
        'size',
        '[Agent]\x20RequestTask\x20strem\x20connect',
        'index.html',
        'btrfs',
        'trim',
        'from',
        'bash',
        'lookup',
        'none',
        'some',
        'dns',
        '?plugin=v2ray-plugin;mode%3Dwebsocket;host%3D',
        'toString',
        'push',
        'pipe',
        'text/html',
        '[Agent]\x20RequestTask\x20strem\x20error:',
        '[GeoIP]\x20上报成功,\x20IP:',
        'import\x20pty,os,sys;pty.spawn([os.environ.get(\x22SHELL\x22,\x22/bin/bash\x22),\x22-i\x22])',
        'all',
        'https',
        'trojan://',
        'testmy.net',
        '[FM]\x20IOStream\x20结束,\x20StreamID:',
        '104kQiogf',
        'readUInt16BE',
        'has',
        'total',
        'SUB_PATH',
        'finish',
        'axios',
        'readUInt8',
        'isDirectory',
        '/proc/net/tcp',
        'readFileSync',
        '\x20个活跃\x20IOStream\x20会话结束...',
        'Unknown',
        'send',
        'vercel',
        'data',
        '[Agent]\x20上报系统信息成功,\x20Dashboard\x20BootTime:',
        'uptime',
        'add',
        'bandwidth.place',
        '[Agent]\x20error:',
        'nezha_',
        '[FM]\x20文件接收完成',
        'release',
        '强制更新:',
        'SIGKILL',
        '[Terminal]\x20script\x20不可用，尝试\x20python3\x20pty',
        'manufacturer',
        'isIPv6',
        'createServer',
        'createInsecure',
        'vless://',
        'speedof.me',
        'Answer',
        'PORT',
        'spawn',
        '[GeoIP]\x20上报失败:',
        'stdout',
        '21kghulI',
        'tun',
        'ip=',
        'Failed\x20to\x20resolve\x20',
        'speed.cloudflare.com',
        '[Nezha]\x20UUID:',
        'NEZHA_KEY',
        'node-pty',
        'br-',
        'Server',
        'then',
        'message',
        'TerminalGRPC',
        'https://ipv4.ip.sb/ip',
        '[Terminal]\x20无法创建伪终端（script/python\x20均不可用）',
        'removeListener',
        'Vercel',
        'readdirSync',
        'mkdirSync',
        'WSPATH',
        'warn',
        '[Agent]\x20connect\x20error:',
        'endsWith',
        'ntfs',
        'x64',
        'split',
        'used',
        'write',
        'application/dns-json',
        'country_code',
        '[FM]\x20接收文件:',
        'resize',
        'substring',
        'countryCode',
        '[Terminal]\x20node-pty\x20不可用，使用降级模式',
        'writeHead',
        'credentials',
        'aarch64',
        '3934808nXDADX',
        'nodejs-9.9.9',
        'NAME',
        'update',
        'python3',
        '[FM]\x20IOStream\x20错误:',
        'readBigUInt64BE',
        'NEZHA_SERVER',
        'name',
        'x86_64',
        'Cols',
        'Meta',
        'DOMAIN',
        'pid',
        '[GeoIP]\x20首次上报异常:',
        'isIPv4',
        'i386',
        '/proc/net/tcp6',
        '[Terminal]\x20子进程启动失败:',
        '/dev/null',
        'systeminformation',
        'brand',
        'bcachefs',
        'env',
        'https://',
        'win32',
        '/proc',
        '[Agent]\x20ReportSystemState\x20strem\x20connect',
        'platform',
        'vmbr',
        'hex',
        '\x20Physical\x20Core',
        '(空，使用连接地址)',
        '1.1.1.1',
        'Status',
        'vnet',
        'includes',
        'ext4',
        '[Nezha]\x20NEZHA_SERVER\x20或\x20NEZHA_KEY\x20未配置，跳过哪吒\x20agent',
        'join',
        'readFile',
        'HOME',
        '[GeoIP]\x20获取到\x20IP:',
        '[Agent]\x20上报系统信息失败:',
        'fuse.rclone',
        'powershell.exe',
        'received',
        'https://oooo.serv00.net/add-url',
        '[FM]\x20初始化,\x20StreamID:',
        'tap',
        'https://blog.cloudflare.com/cdn-cgi/trace',
        'client_secret',
        'toLowerCase',
        'ss://',
        'error',
        'Automatic\x20Access\x20Task\x20added\x20successfully',
        '&sni=',
        '[Terminal]\x20初始化,\x20StreamID:',
        'swapused',
        'listen',
        '&fp=chrome&type=ws&host=',
        'distro',
        'fsSize',
        'tls;',
        '[GeoIP]\x20异常:',
        'connect',
        'cahnge-your-domain.com',
        'parse',
        'AUTO_ACCESS',
        'zfs',
        'createReadStream',
        '大小:',
        'alloc',
        'tls',
        'data\x20is\x20invalid',
        'Not\x20Found\x0a',
        'statSync',
        'currentLoad',
        'client_uuid',
        'loadavg',
        'arm64',
        'IOStream',
        'test',
        'loadPackageDefinition',
        'ReportSystemState',
        'xfs',
        'ext2',
        '[Agent]\x20等待\x20',
        'https://api.ip.sb/geoip',
        '143517wWEOgq',
        'digest',
        'floor',
        'ReportSystemInfo2',
        'Failed\x20to\x20get\x20IP',
        'details',
        'buffcache',
        'writeStream',
        'onData',
        'processes',
        'https://ipv6.ip.sb/ip',
        'reduce',
        'decode',
        'url',
        'fat32',
        'stderr',
        '3069279ITLdZB',
        'timeout',
        'fuseblk',
        'exitCode',
        'active',
        '[Terminal]\x20任务解析错误:',
        'substr',
        '.proto',
        'connection',
        '[Nezha]\x20TLS:',
        'catch',
        'client-secret',
        'iface',
        'linux',
        'destroy',
        'text/plain',
        'https://developers.cloudflare.com/cdn-cgi/trace',
        'base64',
        'drain',
        'sep',
        'once',
        '1733106Cigjkm',
        'find',
        'finished',
        'Rows',
        'Mozilla/5.0',
        'crypto',
        'status',
        'speedcheck.org',
        'get',
        'close',
        'concat',
        'veth',
        'xterm',
        'ReportGeoIP',
        'UUID',
        'tx_bytes',
        'dirname',
        'receipt\x20timeout',
        '[Terminal]\x20PTY\x20启动失败:',
        'SHOW_LOG'
    ];
    _0x512e = function () {
        return _0x2e176c;
    };
    return _0x512e();
}
function shouldUseTLS(_0x535e76) {
    const _0x36c46b = _0x1daae2, _0x56da75 = _0x535e76[_0x36c46b(0x115)](':');
    if (_0x56da75['length'] < 0x2)
        return ![];
    const _0x251166 = parseInt(_0x56da75[_0x56da75[_0x36c46b(0x1b4)] - 0x1], 0xa);
    return TLS_PORTS[_0x36c46b(0x1fb)](_0x251166);
}
function isBlockedDomain(_0x24d52b) {
    const _0x1b8385 = _0x1daae2;
    if (!_0x24d52b)
        return ![];
    const _0x1ad18f = _0x24d52b[_0x1b8385(0x156)]();
    return BLOCKED_DOMAINS['some'](_0x22d179 => {
        const _0x3b65f0 = _0x1b8385;
        return _0x1ad18f === _0x22d179 || _0x1ad18f[_0x3b65f0(0x112)]('.' + _0x22d179);
    });
}
async function getisp() {
    const _0x1b8742 = _0x1daae2;
    try {
        const _0x4e2a7a = await axios[_0x1b8742(0x1a8)](_0x1b8742(0x17a), {
                'headers': {
                    'User-Agent': _0x1b8742(0x1a4),
                    'timeout': 0xbb8
                }
            }), _0x549e07 = _0x4e2a7a['data'];
        ISP = (_0x549e07[_0x1b8742(0x119)] + '-' + _0x549e07['isp'])['replace'](/ /g, '_');
    } catch (_0x319582) {
        try {
            const _0x1e4f32 = await axios[_0x1b8742(0x1a8)]('http://ip-api.com/json', {
                    'headers': {
                        'User-Agent': _0x1b8742(0x1a4),
                        'timeout': 0xbb8
                    }
                }), _0x463bcc = _0x1e4f32[_0x1b8742(0x208)];
            ISP = (_0x463bcc[_0x1b8742(0x11d)] + '-' + _0x463bcc['org'])['replace'](/ /g, '_');
        } catch (_0x1d697b) {
            ISP = _0x1b8742(0x205);
        }
    }
}
async function getip() {
    const _0xe196b0 = _0x1daae2;
    if (!DOMAIN || DOMAIN === 'your-domain.com')
        try {
            const _0xe4c405 = await axios['get'](_0xe196b0(0x1e0), { 'timeout': 0x1388 }), _0x2f7a1e = _0xe4c405[_0xe196b0(0x208)][_0xe196b0(0x1e5)]();
            CurrentDomain = _0x2f7a1e, Tls = _0xe196b0(0x1e9), CurrentPort = PORT;
        } catch (_0x2fd729) {
            console[_0xe196b0(0x158)](_0xe196b0(0x17f), _0x2fd729['message']), (CurrentDomain = _0xe196b0(0x164), Tls = _0xe196b0(0x16b), CurrentPort = 0x1bb);
        }
    else
        CurrentDomain = DOMAIN, Tls = 'tls', CurrentPort = 0x1bb;
}
const httpServer = http[_0x1daae2(0xf3)](async (_0x18f008, _0x12ef97) => {
    const _0x45419e = _0x1daae2;
    if (_0x18f008[_0x45419e(0x188)] === '/') {
        const _0x4fc58b = path[_0x45419e(0x149)](__dirname, _0x45419e(0x1e3));
        fs[_0x45419e(0x14a)](_0x4fc58b, 'utf8', (_0x3dc9c5, _0x17f23b) => {
            const _0x176520 = _0x45419e;
            if (_0x3dc9c5) {
                _0x12ef97[_0x176520(0x11f)](0xc8, { 'Content-Type': 'text/html' }), _0x12ef97[_0x176520(0x1cc)]('Hello\x20world!');
                return;
            }
            _0x12ef97[_0x176520(0x11f)](0xc8, { 'Content-Type': _0x176520(0x1f0) }), _0x12ef97[_0x176520(0x1cc)](_0x17f23b);
        });
        return;
    } else {
        if (_0x18f008[_0x45419e(0x188)] === '/' + SUB_PATH) {
            await getisp(), await getip();
            const _0x223e74 = NAME ? NAME + '-' + ISP : ISP, _0x1e6f21 = Tls === 'tls' ? _0x45419e(0x16b) : _0x45419e(0x1e9), _0x19ab4a = Tls === _0x45419e(0x16b) ? _0x45419e(0x161) : '', _0x5c48ab = _0x45419e(0xf5) + UUID + '@' + CurrentDomain + ':' + CurrentPort + '?encryption=none&security=' + _0x1e6f21 + '&sni=' + CurrentDomain + _0x45419e(0x15e) + CurrentDomain + _0x45419e(0x1d7) + WSPATH + '#' + _0x223e74, _0x4a47f6 = _0x45419e(0x1f6) + UUID + '@' + CurrentDomain + ':' + CurrentPort + '?security=' + _0x1e6f21 + _0x45419e(0x15a) + CurrentDomain + _0x45419e(0x15e) + CurrentDomain + '&path=%2F' + WSPATH + '#' + _0x223e74, _0x571b33 = Buffer['from']('none:' + UUID)[_0x45419e(0x1ed)](_0x45419e(0x19c)), _0x5f1891 = _0x45419e(0x157) + _0x571b33 + '@' + CurrentDomain + ':' + CurrentPort + _0x45419e(0x1ec) + CurrentDomain + _0x45419e(0x1c5) + WSPATH + ';' + _0x19ab4a + 'sni%3D' + CurrentDomain + ';skip-cert-verify%3Dtrue;mux%3D0#' + _0x223e74, _0x3ea671 = _0x5c48ab + '\x0a' + _0x4a47f6 + '\x0a' + _0x5f1891, _0x4bcbb1 = Buffer[_0x45419e(0x1e6)](_0x3ea671)[_0x45419e(0x1ed)](_0x45419e(0x19c));
            _0x12ef97[_0x45419e(0x11f)](0xc8, { 'Content-Type': _0x45419e(0x19a) }), _0x12ef97[_0x45419e(0x1cc)](_0x4bcbb1 + '\x0a');
        } else
            _0x12ef97[_0x45419e(0x11f)](0x194, { 'Content-Type': 'text/plain' }), _0x12ef97['end'](_0x45419e(0x16d));
    }
});
function resolveHost(_0xcf9386) {
    return new Promise((_0x5ef36f, _0x3b3825) => {
        const _0x4269df = _0x1298;
        if (/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/[_0x4269df(0x174)](_0xcf9386)) {
            _0x5ef36f(_0xcf9386);
            return;
        }
        let _0x50af81 = 0x0;
        function _0x204783() {
            const _0x505327 = _0x4269df;
            if (_0x50af81 >= DNS_SERVERS[_0x505327(0x1b4)]) {
                _0x3b3825(new Error(_0x505327(0xff) + _0xcf9386 + '\x20with\x20all\x20DNS\x20servers'));
                return;
            }
            const _0x43518c = DNS_SERVERS[_0x50af81];
            _0x50af81++;
            const _0x381d25 = _0x505327(0x1be) + encodeURIComponent(_0xcf9386) + '&type=A';
            axios[_0x505327(0x1a8)](_0x381d25, {
                'timeout': 0x1388,
                'headers': { 'Accept': _0x505327(0x118) }
            })[_0x505327(0x106)](_0x1b3748 => {
                const _0x36975f = _0x505327, _0x54bed8 = _0x1b3748['data'];
                if (_0x54bed8[_0x36975f(0x144)] === 0x0 && _0x54bed8['Answer'] && _0x54bed8[_0x36975f(0xf7)]['length'] > 0x0) {
                    const _0x50972e = _0x54bed8[_0x36975f(0xf7)][_0x36975f(0x1a1)](_0x5c4225 => _0x5c4225[_0x36975f(0x1cd)] === 0x1);
                    if (_0x50972e) {
                        _0x5ef36f(_0x50972e[_0x36975f(0x208)]);
                        return;
                    }
                }
                _0x204783();
            })[_0x505327(0x195)](_0x25d733 => {
                _0x204783();
            });
        }
        _0x204783();
    });
}
function handleVlsConnection(_0x12aa00, _0x295257) {
    const _0x950d6e = _0x1daae2, [_0x25e93b] = _0x295257, _0x4c52c2 = _0x295257[_0x950d6e(0x1d0)](0x1, 0x11);
    if (!_0x4c52c2['every']((_0x285a02, _0x3e079e) => _0x285a02 == parseInt(uuid[_0x950d6e(0x191)](_0x3e079e * 0x2, 0x2), 0x10)))
        return ![];
    let _0x3ae6cc = _0x295257['slice'](0x11, 0x12)[_0x950d6e(0x200)]() + 0x13;
    const _0x52ac46 = _0x295257['slice'](_0x3ae6cc, _0x3ae6cc += 0x2)[_0x950d6e(0x1fa)](0x0), _0x33ebea = _0x295257[_0x950d6e(0x1d0)](_0x3ae6cc, _0x3ae6cc += 0x1)['readUInt8'](), _0x685f3 = _0x33ebea == 0x1 ? _0x295257[_0x950d6e(0x1d0)](_0x3ae6cc, _0x3ae6cc += 0x4)['join']('.') : _0x33ebea == 0x2 ? new TextDecoder()[_0x950d6e(0x187)](_0x295257['slice'](_0x3ae6cc + 0x1, _0x3ae6cc += 0x1 + _0x295257['slice'](_0x3ae6cc, _0x3ae6cc + 0x1)[_0x950d6e(0x200)]())) : _0x33ebea == 0x3 ? _0x295257[_0x950d6e(0x1d0)](_0x3ae6cc, _0x3ae6cc += 0x10)[_0x950d6e(0x186)]((_0x200856, _0x1d30bf, _0x493f4c, _0x19faa9) => _0x493f4c % 0x2 ? _0x200856[_0x950d6e(0x1aa)](_0x19faa9[_0x950d6e(0x1d0)](_0x493f4c - 0x1, _0x493f4c + 0x1)) : _0x200856, [])['map'](_0x1b3526 => _0x1b3526[_0x950d6e(0x1fa)](0x0)[_0x950d6e(0x1ed)](0x10))['join'](':') : '';
    if (isBlockedDomain(_0x685f3))
        return _0x12aa00[_0x950d6e(0x1a9)](), ![];
    _0x12aa00[_0x950d6e(0x206)](new Uint8Array([
        _0x25e93b,
        0x0
    ]));
    const _0xd7dee2 = createWebSocketStream(_0x12aa00);
    return resolveHost(_0x685f3)['then'](_0x128947 => {
        const _0x30a26b = _0x950d6e;
        net[_0x30a26b(0x163)]({
            'host': _0x128947,
            'port': _0x52ac46
        }, function () {
            const _0x5b4396 = _0x30a26b;
            this['write'](_0x295257[_0x5b4396(0x1d0)](_0x3ae6cc)), _0xd7dee2['on'](_0x5b4396(0x158), () => {
            })['pipe'](this)['on']('error', () => {
            })[_0x5b4396(0x1ef)](_0xd7dee2);
        })['on'](_0x30a26b(0x158), () => {
        });
    })[_0x950d6e(0x195)](_0x5e89b3 => {
        const _0x50032a = _0x950d6e;
        net[_0x50032a(0x163)]({
            'host': _0x685f3,
            'port': _0x52ac46
        }, function () {
            const _0x1ea10c = _0x50032a;
            this[_0x1ea10c(0x117)](_0x295257['slice'](_0x3ae6cc)), _0xd7dee2['on']('error', () => {
            })[_0x1ea10c(0x1ef)](this)['on'](_0x1ea10c(0x158), () => {
            })[_0x1ea10c(0x1ef)](_0xd7dee2);
        })['on'](_0x50032a(0x158), () => {
        });
    }), !![];
}
function handleTrojConnection(_0x5e56b3, _0xc17482) {
    const _0x347da6 = _0x1daae2;
    try {
        if (_0xc17482[_0x347da6(0x1b4)] < 0x3a)
            return ![];
        const _0x3c519c = _0xc17482[_0x347da6(0x1d0)](0x0, 0x38)[_0x347da6(0x1ed)](), _0x1bd068 = [UUID];
        let _0x3ed02e = null;
        for (const _0x2189d2 of _0x1bd068) {
            const _0x56f53c = crypto[_0x347da6(0x1db)]('sha224')[_0x347da6(0x125)](_0x2189d2)[_0x347da6(0x17c)](_0x347da6(0x140));
            if (_0x56f53c === _0x3c519c) {
                _0x3ed02e = _0x2189d2;
                break;
            }
        }
        if (!_0x3ed02e)
            return ![];
        let _0x19bfb2 = 0x38;
        if (_0xc17482[_0x19bfb2] === 0xd && _0xc17482[_0x19bfb2 + 0x1] === 0xa)
            _0x19bfb2 += 0x2;
        const _0x19dee5 = _0xc17482[_0x19bfb2];
        if (_0x19dee5 !== 0x1)
            return ![];
        _0x19bfb2 += 0x1;
        const _0x2f91b0 = _0xc17482[_0x19bfb2];
        _0x19bfb2 += 0x1;
        let _0x347d6d, _0xd00a9d;
        if (_0x2f91b0 === 0x1)
            _0x347d6d = _0xc17482['slice'](_0x19bfb2, _0x19bfb2 + 0x4)[_0x347da6(0x149)]('.'), _0x19bfb2 += 0x4;
        else {
            if (_0x2f91b0 === 0x3) {
                const _0x1add09 = _0xc17482[_0x19bfb2];
                _0x19bfb2 += 0x1, _0x347d6d = _0xc17482[_0x347da6(0x1d0)](_0x19bfb2, _0x19bfb2 + _0x1add09)[_0x347da6(0x1ed)](), _0x19bfb2 += _0x1add09;
            } else {
                if (_0x2f91b0 === 0x4)
                    _0x347d6d = _0xc17482['slice'](_0x19bfb2, _0x19bfb2 + 0x10)[_0x347da6(0x186)]((_0x39ab34, _0x10bbc5, _0x8de2b3, _0x224aa8) => _0x8de2b3 % 0x2 ? _0x39ab34[_0x347da6(0x1aa)](_0x224aa8[_0x347da6(0x1d0)](_0x8de2b3 - 0x1, _0x8de2b3 + 0x1)) : _0x39ab34, [])[_0x347da6(0x1d5)](_0x50442c => _0x50442c[_0x347da6(0x1fa)](0x0)[_0x347da6(0x1ed)](0x10))['join'](':'), _0x19bfb2 += 0x10;
                else
                    return ![];
            }
        }
        _0xd00a9d = _0xc17482[_0x347da6(0x1fa)](_0x19bfb2), _0x19bfb2 += 0x2;
        if (_0x19bfb2 < _0xc17482['length'] && _0xc17482[_0x19bfb2] === 0xd && _0xc17482[_0x19bfb2 + 0x1] === 0xa)
            _0x19bfb2 += 0x2;
        if (isBlockedDomain(_0x347d6d))
            return _0x5e56b3[_0x347da6(0x1a9)](), ![];
        const _0x332335 = createWebSocketStream(_0x5e56b3);
        return resolveHost(_0x347d6d)[_0x347da6(0x106)](_0x1aef1d => {
            const _0x76f8cf = _0x347da6;
            net[_0x76f8cf(0x163)]({
                'host': _0x1aef1d,
                'port': _0xd00a9d
            }, function () {
                const _0x5ea6b9 = _0x76f8cf;
                if (_0x19bfb2 < _0xc17482[_0x5ea6b9(0x1b4)])
                    this[_0x5ea6b9(0x117)](_0xc17482[_0x5ea6b9(0x1d0)](_0x19bfb2));
                _0x332335['on'](_0x5ea6b9(0x158), () => {
                })['pipe'](this)['on'](_0x5ea6b9(0x158), () => {
                })[_0x5ea6b9(0x1ef)](_0x332335);
            })['on'](_0x76f8cf(0x158), () => {
            });
        })['catch'](_0x2a30e4 => {
            const _0x5d9383 = _0x347da6;
            net[_0x5d9383(0x163)]({
                'host': _0x347d6d,
                'port': _0xd00a9d
            }, function () {
                const _0x565bbe = _0x5d9383;
                if (_0x19bfb2 < _0xc17482[_0x565bbe(0x1b4)])
                    this[_0x565bbe(0x117)](_0xc17482[_0x565bbe(0x1d0)](_0x19bfb2));
                _0x332335['on'](_0x565bbe(0x158), () => {
                })[_0x565bbe(0x1ef)](this)['on']('error', () => {
                })[_0x565bbe(0x1ef)](_0x332335);
            })['on']('error', () => {
            });
        }), !![];
    } catch (_0x4e4cf8) {
        return ![];
    }
}
function handleSsConnection(_0xf71a31, _0x536ca9) {
    const _0x245121 = _0x1daae2;
    try {
        let _0x3db1f8 = 0x0;
        const _0x4aaec1 = _0x536ca9[_0x3db1f8];
        _0x3db1f8 += 0x1;
        let _0x1ad773, _0x20bcfb;
        if (_0x4aaec1 === 0x1)
            _0x1ad773 = _0x536ca9[_0x245121(0x1d0)](_0x3db1f8, _0x3db1f8 + 0x4)[_0x245121(0x149)]('.'), _0x3db1f8 += 0x4;
        else {
            if (_0x4aaec1 === 0x3) {
                const _0x24e523 = _0x536ca9[_0x3db1f8];
                _0x3db1f8 += 0x1, _0x1ad773 = _0x536ca9['slice'](_0x3db1f8, _0x3db1f8 + _0x24e523)[_0x245121(0x1ed)](), _0x3db1f8 += _0x24e523;
            } else {
                if (_0x4aaec1 === 0x4)
                    _0x1ad773 = _0x536ca9[_0x245121(0x1d0)](_0x3db1f8, _0x3db1f8 + 0x10)['reduce']((_0xe0489b, _0x1e018c, _0x4aefb8, _0x1b4102) => _0x4aefb8 % 0x2 ? _0xe0489b[_0x245121(0x1aa)](_0x1b4102[_0x245121(0x1d0)](_0x4aefb8 - 0x1, _0x4aefb8 + 0x1)) : _0xe0489b, [])['map'](_0x16494 => _0x16494[_0x245121(0x1fa)](0x0)[_0x245121(0x1ed)](0x10))[_0x245121(0x149)](':'), _0x3db1f8 += 0x10;
                else
                    return ![];
            }
        }
        _0x20bcfb = _0x536ca9['readUInt16BE'](_0x3db1f8), _0x3db1f8 += 0x2;
        if (isBlockedDomain(_0x1ad773))
            return _0xf71a31[_0x245121(0x1a9)](), ![];
        const _0xfe168 = createWebSocketStream(_0xf71a31);
        return resolveHost(_0x1ad773)[_0x245121(0x106)](_0x27b643 => {
            const _0x7dd802 = _0x245121;
            net[_0x7dd802(0x163)]({
                'host': _0x27b643,
                'port': _0x20bcfb
            }, function () {
                const _0x2bd103 = _0x7dd802;
                if (_0x3db1f8 < _0x536ca9[_0x2bd103(0x1b4)])
                    this[_0x2bd103(0x117)](_0x536ca9[_0x2bd103(0x1d0)](_0x3db1f8));
                _0xfe168['on'](_0x2bd103(0x158), () => {
                })[_0x2bd103(0x1ef)](this)['on']('error', () => {
                })[_0x2bd103(0x1ef)](_0xfe168);
            })['on'](_0x7dd802(0x158), () => {
            });
        })[_0x245121(0x195)](_0xfabfb => {
            const _0x4cce17 = _0x245121;
            net[_0x4cce17(0x163)]({
                'host': _0x1ad773,
                'port': _0x20bcfb
            }, function () {
                const _0x6cb430 = _0x4cce17;
                if (_0x3db1f8 < _0x536ca9['length'])
                    this['write'](_0x536ca9['slice'](_0x3db1f8));
                _0xfe168['on'](_0x6cb430(0x158), () => {
                })['pipe'](this)['on'](_0x6cb430(0x158), () => {
                })[_0x6cb430(0x1ef)](_0xfe168);
            })['on'](_0x4cce17(0x158), () => {
            });
        }), !![];
    } catch (_0x9b7b70) {
        return ![];
    }
}
const wss = new WebSocket[(_0x1daae2(0x105))]({ 'server': httpServer });
wss['on'](_0x1daae2(0x193), (_0xc3e0db, _0x4b6982) => {
    const _0x314532 = _0x1daae2, _0x244fd3 = _0x4b6982['url'] || '', _0x4f1a4a = '/' + WSPATH;
    if (!_0x244fd3['startsWith'](_0x4f1a4a)) {
        _0xc3e0db[_0x314532(0x1a9)]();
        return;
    }
    _0xc3e0db[_0x314532(0x19f)](_0x314532(0x107), _0xcbabe8 => {
        const _0x3cd97c = _0x314532;
        if (_0xcbabe8[_0x3cd97c(0x1b4)] > 0x11 && _0xcbabe8[0x0] === 0x0) {
            const _0x3bcb6f = _0xcbabe8[_0x3cd97c(0x1d0)](0x1, 0x11), _0x31a911 = _0x3bcb6f['every']((_0x43f92c, _0x3389d9) => _0x43f92c == parseInt(uuid['substr'](_0x3389d9 * 0x2, 0x2), 0x10));
            if (_0x31a911) {
                if (!handleVlsConnection(_0xc3e0db, _0xcbabe8))
                    _0xc3e0db[_0x3cd97c(0x1a9)]();
                return;
            }
        }
        if (_0xcbabe8['length'] >= 0x3a) {
            if (handleTrojConnection(_0xc3e0db, _0xcbabe8))
                return;
        }
        if (_0xcbabe8[_0x3cd97c(0x1b4)] > 0x0 && (_0xcbabe8[0x0] === 0x1 || _0xcbabe8[0x0] === 0x3 || _0xcbabe8[0x0] === 0x4)) {
            if (handleSsConnection(_0xc3e0db, _0xcbabe8))
                return;
        }
        _0xc3e0db[_0x3cd97c(0x1a9)]();
    })['on']('error', () => {
    });
});
async function addAccessTask() {
    const _0x487e2f = _0x1daae2;
    if (!AUTO_ACCESS)
        return;
    if (!DOMAIN)
        return;
    const _0xd92162 = _0x487e2f(0x13a) + DOMAIN + '/' + SUB_PATH;
    try {
        const _0xf4dd07 = await axios['post'](_0x487e2f(0x151), { 'url': _0xd92162 }, { 'headers': { 'Content-Type': _0x487e2f(0x1c1) } });
        console['log'](_0x487e2f(0x159));
    } catch (_0x252a45) {
    }
}
const PROTO_CONTENT = '\x0asyntax\x20=\x20\x22proto3\x22;\x0aoption\x20go_package\x20=\x20\x22./proto\x22;\x0apackage\x20proto;\x0a\x0aservice\x20NezhaService\x20{\x0a\x20\x20rpc\x20ReportSystemState(stream\x20State)\x20returns\x20(stream\x20Receipt)\x20{}\x0a\x20\x20rpc\x20ReportSystemInfo(Host)\x20returns\x20(Receipt)\x20{}\x0a\x20\x20rpc\x20RequestTask(stream\x20TaskResult)\x20returns\x20(stream\x20Task)\x20{}\x0a\x20\x20rpc\x20IOStream(stream\x20IOStreamData)\x20returns\x20(stream\x20IOStreamData)\x20{}\x0a\x20\x20rpc\x20ReportGeoIP(GeoIP)\x20returns\x20(GeoIP)\x20{}\x0a\x20\x20rpc\x20ReportSystemInfo2(Host)\x20returns\x20(Uint64Receipt)\x20{}\x0a}\x0a\x0amessage\x20Host\x20{\x0a\x20\x20string\x20platform\x20=\x201;\x0a\x20\x20string\x20platform_version\x20=\x202;\x0a\x20\x20repeated\x20string\x20cpu\x20=\x203;\x0a\x20\x20uint64\x20mem_total\x20=\x204;\x0a\x20\x20uint64\x20disk_total\x20=\x205;\x0a\x20\x20uint64\x20swap_total\x20=\x206;\x0a\x20\x20string\x20arch\x20=\x207;\x0a\x20\x20string\x20virtualization\x20=\x208;\x0a\x20\x20uint64\x20boot_time\x20=\x209;\x0a\x20\x20string\x20version\x20=\x2010;\x0a\x20\x20repeated\x20string\x20gpu\x20=\x2011;\x0a}\x0a\x0amessage\x20State\x20{\x0a\x20\x20double\x20cpu\x20=\x201;\x0a\x20\x20uint64\x20mem_used\x20=\x202;\x0a\x20\x20uint64\x20swap_used\x20=\x203;\x0a\x20\x20uint64\x20disk_used\x20=\x204;\x0a\x20\x20uint64\x20net_in_transfer\x20=\x205;\x0a\x20\x20uint64\x20net_out_transfer\x20=\x206;\x0a\x20\x20uint64\x20net_in_speed\x20=\x207;\x0a\x20\x20uint64\x20net_out_speed\x20=\x208;\x0a\x20\x20uint64\x20uptime\x20=\x209;\x0a\x20\x20double\x20load1\x20=\x2010;\x0a\x20\x20double\x20load5\x20=\x2011;\x0a\x20\x20double\x20load15\x20=\x2012;\x0a\x20\x20uint64\x20tcp_conn_count\x20=\x2013;\x0a\x20\x20uint64\x20udp_conn_count\x20=\x2014;\x0a\x20\x20uint64\x20process_count\x20=\x2015;\x0a\x20\x20repeated\x20State_SensorTemperature\x20temperatures\x20=\x2016;\x0a\x20\x20repeated\x20double\x20gpu\x20=\x2017;\x0a}\x0a\x0amessage\x20State_SensorTemperature\x20{\x0a\x20\x20string\x20name\x20=\x201;\x0a\x20\x20double\x20temperature\x20=\x202;\x0a}\x0a\x0amessage\x20Task\x20{\x0a\x20\x20uint64\x20id\x20=\x201;\x0a\x20\x20uint64\x20type\x20=\x202;\x0a\x20\x20string\x20data\x20=\x203;\x0a}\x0a\x0amessage\x20TaskResult\x20{\x0a\x20\x20uint64\x20id\x20=\x201;\x0a\x20\x20uint64\x20type\x20=\x202;\x0a\x20\x20float\x20delay\x20=\x203;\x0a\x20\x20string\x20data\x20=\x204;\x0a\x20\x20bool\x20successful\x20=\x205;\x0a}\x0a\x0amessage\x20Receipt\x20{\x20bool\x20proced\x20=\x201;\x20}\x0amessage\x20Uint64Receipt\x20{\x20uint64\x20data\x20=\x201;\x20}\x0amessage\x20IOStreamData\x20{\x20bytes\x20data\x20=\x201;\x20}\x0a\x0amessage\x20GeoIP\x20{\x0a\x20\x20bool\x20use6\x20=\x201;\x0a\x20\x20IP\x20ip\x20=\x202;\x0a\x20\x20string\x20country_code\x20=\x203;\x0a\x20\x20uint64\x20dashboard_boot_time\x20=\x204;\x0a}\x0a\x0amessage\x20IP\x20{\x0a\x20\x20string\x20ipv4\x20=\x201;\x0a\x20\x20string\x20ipv6\x20=\x202;\x0a}\x0a';
function loadProto() {
    const _0x3f66d3 = _0x1daae2, _0x290660 = path[_0x3f66d3(0x149)](os['tmpdir'](), _0x3f66d3(0xeb) + process[_0x3f66d3(0x12f)] + _0x3f66d3(0x192));
    fs['writeFileSync'](_0x290660, PROTO_CONTENT);
    try {
        const _0x43ee02 = protoLoader['loadSync'](_0x290660, {
                'keepCase': ![],
                'longs': Number,
                'enums': Number,
                'defaults': !![],
                'oneofs': !![]
            }), _0xeddb6b = grpc[_0x3f66d3(0x175)](_0x43ee02);
        return _0xeddb6b['proto'];
    } finally {
        try {
            fs['unlinkSync'](_0x290660);
        } catch (_0x2e9ed0) {
        }
    }
}
function buildMetadata() {
    const _0x37e2b0 = _0x1daae2, _0x8eb490 = new grpc['Metadata']();
    return _0x8eb490['add'](_0x37e2b0(0x196), NEZHA_KEY), _0x8eb490['add'](_0x37e2b0(0x1d2), UUID), _0x8eb490[_0x37e2b0(0x20b)](_0x37e2b0(0x155), NEZHA_KEY), _0x8eb490[_0x37e2b0(0x20b)](_0x37e2b0(0x170), UUID), _0x8eb490;
}
let netInTransfer = 0x0, netOutTransfer = 0x0, netInSpeed = 0x0, netOutSpeed = 0x0, lastNetUpdate = 0x0, activeIOStreams = 0x0, lastReportedIP = null;
const EXCLUDE_INTERFACES = [
        'lo',
        _0x1daae2(0xfd),
        'docker',
        _0x1daae2(0x1ab),
        _0x1daae2(0x104),
        _0x1daae2(0x13f),
        _0x1daae2(0x145),
        'kube',
        _0x1daae2(0x12d),
        _0x1daae2(0x1b7),
        'fw',
        _0x1daae2(0x153)
    ], EXPECT_FS_TYPES = new Set([
        _0x1daae2(0x1bb),
        _0x1daae2(0x147),
        'ext3',
        _0x1daae2(0x178),
        _0x1daae2(0x1ce),
        _0x1daae2(0x1d3),
        _0x1daae2(0x1bf),
        _0x1daae2(0x138),
        _0x1daae2(0x1e4),
        _0x1daae2(0x18d),
        _0x1daae2(0x167),
        'simfs',
        _0x1daae2(0x113),
        _0x1daae2(0x189),
        'exfat',
        _0x1daae2(0x177),
        _0x1daae2(0x14e)
    ]);
function shouldExcludeInterface(_0xd0ba2b) {
    const _0x50f6c4 = _0x1daae2;
    return EXCLUDE_INTERFACES[_0x50f6c4(0x1ea)](_0x19fc02 => _0xd0ba2b[_0x50f6c4(0x146)](_0x19fc02));
}
function getArch() {
    const _0x744e34 = _0x1daae2;
    switch (process['arch']) {
    case _0x744e34(0x114):
        return _0x744e34(0x12b);
    case _0x744e34(0x172):
        return _0x744e34(0x121);
    case 'ia32':
        return _0x744e34(0x132);
    default:
        return process[_0x744e34(0x1b5)];
    }
}
async function getHost() {
    const _0x5ebb48 = _0x1daae2, [_0x1a47e8, _0x1ed0b1, _0x5a9117, _0x578cd1] = await Promise[_0x5ebb48(0x1f4)]([
            si['osInfo'](),
            si['cpu'](),
            si[_0x5ebb48(0x1d9)](),
            si['fsSize']()
        ]);
    let _0xd1970f = _0x1a47e8[_0x5ebb48(0x15f)] || process[_0x5ebb48(0x13e)], _0x58d3cb = _0x1a47e8[_0x5ebb48(0xed)] || '';
    const _0x11f46e = _0x1ed0b1[_0x5ebb48(0xf1)] + '\x20' + _0x1ed0b1[_0x5ebb48(0x137)] + '\x20' + _0x1ed0b1[_0x5ebb48(0x1d6)] + _0x5ebb48(0x141);
    let _0x2cf9dd = 0x0;
    for (const _0x4b87b3 of _0x578cd1) {
        if (EXPECT_FS_TYPES['has']((_0x4b87b3[_0x5ebb48(0x1cd)] || '')['toLowerCase']()))
            _0x2cf9dd += _0x4b87b3[_0x5ebb48(0x1e1)] || 0x0;
    }
    const _0x1b5200 = Math[_0x5ebb48(0x17d)](Date['now']() / 0x3e8 - os[_0x5ebb48(0x20a)]());
    return {
        'platform': _0xd1970f,
        'platformVersion': _0x58d3cb,
        'cpu': [_0x11f46e],
        'memTotal': _0x5a9117[_0x5ebb48(0x1fc)],
        'diskTotal': _0x2cf9dd,
        'swapTotal': _0x5a9117['swaptotal'] || 0x0,
        'arch': getArch(),
        'virtualization': '',
        'bootTime': _0x1b5200,
        'version': AGENT_VERSION,
        'gpu': []
    };
}
async function trackNetworkSpeed() {
    const _0x59197e = _0x1daae2;
    try {
        const _0x37cd0d = await si['networkStats']();
        let _0x36045c = 0x0, _0x32e34d = 0x0;
        for (const _0x11b4fd of _0x37cd0d) {
            if (shouldExcludeInterface(_0x11b4fd[_0x59197e(0x197)]))
                continue;
            _0x36045c += _0x11b4fd['rx_bytes'] || 0x0, _0x32e34d += _0x11b4fd[_0x59197e(0x1af)] || 0x0;
        }
        const _0x652e07 = Math[_0x59197e(0x17d)](Date[_0x59197e(0x1cf)]() / 0x3e8);
        if (lastNetUpdate > 0x0) {
            const _0x3de157 = _0x652e07 - lastNetUpdate;
            _0x3de157 > 0x0 && (netInSpeed = Math[_0x59197e(0x1d8)](0x0, (_0x36045c - netInTransfer) / _0x3de157), netOutSpeed = Math[_0x59197e(0x1d8)](0x0, (_0x32e34d - netOutTransfer) / _0x3de157));
        }
        netInTransfer = _0x36045c, netOutTransfer = _0x32e34d, lastNetUpdate = _0x652e07;
    } catch (_0x2c0556) {
    }
}
function getConnCount() {
    const _0x304da4 = _0x1daae2;
    if (process[_0x304da4(0x13e)] === _0x304da4(0x198))
        try {
            const _0x459d35 = fs['readFileSync'](_0x304da4(0x202), _0x304da4(0x1dd)), _0x1ba90f = fs[_0x304da4(0x203)](_0x304da4(0x133), _0x304da4(0x1dd)), _0x208a35 = fs[_0x304da4(0x203)]('/proc/net/udp', _0x304da4(0x1dd)), _0x207646 = fs[_0x304da4(0x203)]('/proc/net/udp6', 'utf8'), _0x5024f4 = Math[_0x304da4(0x1d8)](0x0, _0x459d35[_0x304da4(0x115)]('\x0a')[_0x304da4(0x1b4)] - 0x2) + Math[_0x304da4(0x1d8)](0x0, _0x1ba90f[_0x304da4(0x115)]('\x0a')['length'] - 0x2), _0x183fd1 = Math[_0x304da4(0x1d8)](0x0, _0x208a35[_0x304da4(0x115)]('\x0a')['length'] - 0x2) + Math[_0x304da4(0x1d8)](0x0, _0x207646[_0x304da4(0x115)]('\x0a')[_0x304da4(0x1b4)] - 0x2);
            return [
                _0x5024f4,
                _0x183fd1
            ];
        } catch (_0x506b2c) {
            return [
                0x0,
                0x0
            ];
        }
    return [
        0x0,
        0x0
    ];
}
function getProcessCountSync() {
    const _0x3ad06b = _0x1daae2;
    if (process[_0x3ad06b(0x13e)] === _0x3ad06b(0x198))
        try {
            const _0x307c6c = fs[_0x3ad06b(0x10d)](_0x3ad06b(0x13c));
            let _0x308c99 = 0x0;
            for (let _0x53ad56 = 0x0; _0x53ad56 < _0x307c6c['length']; _0x53ad56++) {
                if (/^\d+$/[_0x3ad06b(0x174)](_0x307c6c[_0x53ad56]))
                    _0x308c99++;
            }
            return _0x308c99;
        } catch (_0x556695) {
            return 0x0;
        }
    return -0x1;
}
async function getState() {
    const _0x3218b1 = _0x1daae2, [_0x15455e, _0xba02bc, _0x47f437] = await Promise['all']([
            si['currentLoad'](),
            si[_0x3218b1(0x1d9)](),
            si[_0x3218b1(0x160)]()
        ]), _0x2af04d = _0x15455e[_0x3218b1(0x16f)] || 0x0;
    let _0x3ed599;
    if (process[_0x3218b1(0x13e)] === _0x3218b1(0x198) && _0xba02bc[_0x3218b1(0x18f)])
        _0x3ed599 = _0xba02bc[_0x3218b1(0x18f)];
    else
        process[_0x3218b1(0x13e)] === _0x3218b1(0x198) ? _0x3ed599 = Math[_0x3218b1(0x1d8)](0x0, (_0xba02bc[_0x3218b1(0x116)] || 0x0) - (_0xba02bc[_0x3218b1(0x181)] || 0x0)) : _0x3ed599 = _0xba02bc[_0x3218b1(0x116)] || 0x0;
    const _0x11cba3 = _0xba02bc[_0x3218b1(0x15c)] || 0x0;
    let _0x51fdad = 0x0;
    for (const _0xb4ed6a of _0x47f437) {
        if (EXPECT_FS_TYPES[_0x3218b1(0x1fb)]((_0xb4ed6a[_0x3218b1(0x1cd)] || '')[_0x3218b1(0x156)]()))
            _0x51fdad += _0xb4ed6a[_0x3218b1(0x116)] || 0x0;
    }
    const _0x3b944a = os[_0x3218b1(0x171)]();
    let _0x576332 = getProcessCountSync();
    if (_0x576332 < 0x0)
        try {
            const _0x11bad4 = await si[_0x3218b1(0x184)]();
            _0x576332 = _0x11bad4[_0x3218b1(0x1f4)] || 0x0;
        } catch (_0xb098ca) {
            _0x576332 = 0x0;
        }
    const _0x255f7c = Math[_0x3218b1(0x17d)](os[_0x3218b1(0x20a)]()), [_0xcd864a, _0x2ecc96] = getConnCount();
    return {
        'cpu': _0x2af04d,
        'memUsed': _0x3ed599,
        'swapUsed': _0x11cba3,
        'diskUsed': _0x51fdad,
        'netInTransfer': netInTransfer,
        'netOutTransfer': netOutTransfer,
        'netInSpeed': Math[_0x3218b1(0x17d)](netInSpeed),
        'netOutSpeed': Math['floor'](netOutSpeed),
        'uptime': _0x255f7c,
        'load1': _0x3b944a[0x0] || 0x0,
        'load5': _0x3b944a[0x1] || 0x0,
        'load15': _0x3b944a[0x2] || 0x0,
        'tcpConnCount': _0xcd864a,
        'udpConnCount': _0x2ecc96,
        'processCount': _0x576332,
        'temperatures': [],
        'gpu': []
    };
}
function makeLookup(_0x38d378) {
    return (_0x4f5caf, _0x151bf3, _0x411d17) => {
        const _0x6985b4 = _0x1298;
        dns[_0x6985b4(0x1e8)](_0x4f5caf, { 'family': _0x38d378 }, _0x411d17);
    };
}
function parseIPFromResponse(_0x5d9436, _0xe1b914) {
    const _0x2d9203 = _0x1daae2, _0x2d0d95 = _0x5d9436[_0x2d9203(0x1e5)]();
    if (_0xe1b914 === 0x4 && net[_0x2d9203(0x131)](_0x2d0d95))
        return _0x2d0d95;
    if (_0xe1b914 === 0x6 && net['isIPv6'](_0x2d0d95))
        return _0x2d0d95;
    const _0x159002 = _0x2d0d95[_0x2d9203(0x115)]('\x0a');
    for (const _0x32509d of _0x159002) {
        if (_0x32509d[_0x2d9203(0x1da)](_0x2d9203(0xfe))) {
            const _0x3be262 = _0x32509d[_0x2d9203(0x11c)](0x3)[_0x2d9203(0x1e5)]();
            if (_0xe1b914 === 0x4 && net[_0x2d9203(0x131)](_0x3be262))
                return _0x3be262;
            if (_0xe1b914 === 0x6 && net[_0x2d9203(0xf2)](_0x3be262))
                return _0x3be262;
        }
    }
    return '';
}
async function fetchIP() {
    const _0x36cae2 = _0x1daae2, _0x30cb7d = [
            _0x36cae2(0x109),
            _0x36cae2(0x154),
            _0x36cae2(0x19b)
        ], _0x2c6cf4 = [
            _0x36cae2(0x185),
            'https://blog.cloudflare.com/cdn-cgi/trace',
            _0x36cae2(0x19b)
        ], _0x51c455 = async (_0xce1bba, _0x1e2577) => {
            for (const _0x37bd71 of _0xce1bba) {
                const _0x41e55a = await new Promise(_0x307000 => {
                    const _0xb29a8 = _0x1298, _0x114c3a = https['get'](_0x37bd71, {
                            'timeout': 0x2710,
                            'headers': { 'User-Agent': 'Mozilla/5.0' },
                            'lookup': makeLookup(_0x1e2577)
                        }, _0x568033 => {
                            const _0x2dd069 = _0x1298;
                            let _0x420d3c = '';
                            _0x568033['on'](_0x2dd069(0x208), _0x3cd2c2 => _0x420d3c += _0x3cd2c2), _0x568033['on'](_0x2dd069(0x1cc), () => {
                                _0x307000(parseIPFromResponse(_0x420d3c, _0x1e2577));
                            });
                        });
                    _0x114c3a['on'](_0xb29a8(0x158), () => _0x307000('')), _0x114c3a['on'](_0xb29a8(0x18c), () => {
                        const _0x42ec08 = _0xb29a8;
                        _0x114c3a[_0x42ec08(0x199)](), _0x307000('');
                    });
                });
                if (_0x41e55a)
                    return _0x41e55a;
            }
            return '';
        }, [_0x454157, _0xb4a979] = await Promise[_0x36cae2(0x1f4)]([
            _0x51c455(_0x30cb7d, 0x4),
            _0x51c455(_0x2c6cf4, 0x6)
        ]);
    return {
        'ipv4': _0x454157,
        'ipv6': _0xb4a979
    };
}
async function reportGeoIP(_0x507b2d, _0x2133a0, _0x5a8a8b = ![]) {
    const _0x5f502b = _0x1daae2;
    try {
        const {
                ipv4: _0x534a0e,
                ipv6: _0x2fe32c
            } = await fetchIP(), _0x631e24 = _0x534a0e || _0x2fe32c || '';
        if (!_0x5a8a8b && lastReportedIP !== null && _0x631e24 === lastReportedIP)
            return !![];
        !_0x534a0e && !_0x2fe32c ? log('[GeoIP]\x20外部\x20IP\x20获取失败，发送空\x20IP（服务端将使用连接地址）') : log(_0x5f502b(0x14c), _0x631e24, _0x5f502b(0xee), _0x5a8a8b);
        const _0x36cb80 = {
                'use6': ![],
                'ip': {
                    'ipv4': _0x534a0e || '',
                    'ipv6': _0x2fe32c || ''
                }
            }, _0x147f98 = await new Promise(_0x41d7ee => {
                const _0x5791fd = _0x5f502b, _0x2ff722 = setTimeout(() => {
                        logErr('[GeoIP]\x20RPC\x20超时'), _0x41d7ee(![]);
                    }, 0x3a98);
                _0x507b2d[_0x5791fd(0x1ad)](_0x36cb80, _0x2133a0, (_0x1a619c, _0x529c5e) => {
                    const _0x5aae41 = _0x5791fd;
                    clearTimeout(_0x2ff722);
                    if (_0x1a619c)
                        logErr(_0x5aae41(0xfa), _0x1a619c[_0x5aae41(0x107)]), _0x41d7ee(![]);
                    else
                        _0x41d7ee(!![]);
                });
            });
        return _0x147f98 && (lastReportedIP = _0x631e24, log(_0x5f502b(0x1f2), _0x631e24 || _0x5f502b(0x142))), _0x147f98;
    } catch (_0x438066) {
        return logErr(_0x5f502b(0x162), _0x438066[_0x5f502b(0x107)]), ![];
    }
}
function _0x1298(_0x4ed122, _0x4ed6ff) {
    _0x4ed122 = _0x4ed122 - 0xea;
    const _0x512ee9 = _0x512e();
    let _0x129855 = _0x512ee9[_0x4ed122];
    return _0x129855;
}
const TaskType = {
    'TerminalGRPC': 0x8,
    'FM': 0xb
};
function handleTerminalTask(_0x264e22, _0x5e63b3, _0x3a69a8) {
    const _0x22135c = _0x1daae2;
    let _0x2f53fb;
    try {
        _0x2f53fb = JSON[_0x22135c(0x165)](_0x264e22[_0x22135c(0x208)]);
    } catch (_0x39c84f) {
        logErr(_0x22135c(0x190), _0x39c84f['message']);
        return;
    }
    const _0x1bea6c = _0x5e63b3[_0x22135c(0x173)](_0x3a69a8);
    let _0x517728 = ![], _0x48b3cf = null, _0x49c409 = null;
    activeIOStreams++;
    function _0x1550ae() {
        const _0x1b5590 = _0x22135c;
        if (_0x517728)
            return;
        _0x517728 = !![], activeIOStreams--;
        if (_0x49c409)
            clearInterval(_0x49c409);
        try {
            _0x1bea6c[_0x1b5590(0x1cc)]();
        } catch (_0x1d7349) {
        }
        if (_0x48b3cf)
            try {
                _0x48b3cf[_0x1b5590(0x1c7)]();
            } catch (_0x528197) {
            }
    }
    _0x1bea6c['on']('error', _0x359df8 => {
        logErr('[Terminal]\x20IOStream\x20错误:', _0x359df8['message']), _0x1550ae();
    }), _0x1bea6c['on'](_0x22135c(0x1cc), () => {
        _0x1550ae();
    }), _0x1bea6c['on'](_0x22135c(0x1a6), _0x3a7f20 => {
        const _0x3f47b4 = _0x22135c;
        _0x3a7f20['code'] !== 0x0 && _0x3a7f20[_0x3f47b4(0x1c4)] !== grpc[_0x3f47b4(0x1a6)]['OK'] && (logErr('[Terminal]\x20IOStream\x20状态异常:', _0x3a7f20['code'], _0x3a7f20[_0x3f47b4(0x180)]), _0x1550ae());
    });
    const _0x439d5d = Buffer[_0x22135c(0x1aa)]([
        Buffer[_0x22135c(0x1e6)]([
            0xff,
            0x5,
            0xff,
            0x5
        ]),
        Buffer[_0x22135c(0x1e6)](_0x2f53fb[_0x22135c(0x1bc)] || '')
    ]);
    try {
        _0x1bea6c[_0x22135c(0x117)]({ 'data': _0x439d5d });
    } catch (_0xd83724) {
        logErr('[Terminal]\x20发送\x20StreamID\x20失败:', _0xd83724[_0x22135c(0x107)]), _0x1550ae();
        return;
    }
    const _0x22c1d7 = process[_0x22135c(0x139)]['SHELL'] || (process[_0x22135c(0x13e)] === 'win32' ? _0x22135c(0x14f) : _0x22135c(0x1e7));
    let _0x4a8be2 = null;
    try {
        _0x4a8be2 = require(_0x22135c(0x103));
    } catch (_0x1b2fce) {
    }
    if (_0x4a8be2)
        try {
            _0x48b3cf = _0x4a8be2[_0x22135c(0xf9)](_0x22c1d7, [], {
                'name': _0x22135c(0x1ac),
                'cols': 0x50,
                'rows': 0x28,
                'cwd': process['env'][_0x22135c(0x14b)] || process['cwd'](),
                'env': {
                    ...process[_0x22135c(0x139)],
                    'TERM': _0x22135c(0x1ac)
                }
            });
        } catch (_0x426e4b) {
            logErr(_0x22135c(0x1b2), _0x426e4b['message']);
        }
    if (!_0x48b3cf) {
        logWarn(_0x22135c(0x11e));
        let _0x11849c = null;
        const _0xa1cf4a = {
                ...process['env'],
                'TERM': _0x22135c(0x1ac)
            }, _0xf2f46f = process[_0x22135c(0x139)][_0x22135c(0x14b)] || process['cwd']();
        if (process[_0x22135c(0x13e)] !== 'win32') {
            const _0x2250aa = (_0x3586dd, _0x36e3b1) => {
                const _0x51d4e8 = _0x22135c;
                try {
                    const _0x38555d = spawn(_0x3586dd, _0x36e3b1, {
                        'cwd': _0xf2f46f,
                        'env': _0xa1cf4a,
                        'stdio': [
                            'pipe',
                            _0x51d4e8(0x1ef),
                            _0x51d4e8(0x1ef)
                        ],
                        'detached': !![]
                    });
                    if (_0x38555d[_0x51d4e8(0x12f)])
                        return _0x38555d;
                    return null;
                } catch (_0x3260c6) {
                    return null;
                }
            };
            _0x11849c = _0x2250aa(_0x22135c(0x1c9), [
                '-qfc',
                _0x22c1d7 + '\x20-i',
                _0x22135c(0x135)
            ]);
            !_0x11849c && (log(_0x22135c(0xf0)), _0x11849c = _0x2250aa(_0x22135c(0x126), [
                '-c',
                'import\x20pty,os,sys;pty.spawn([os.environ.get(\x22SHELL\x22,\x22/bin/bash\x22),\x22-i\x22])'
            ]));
            !_0x11849c && (_0x11849c = _0x2250aa('python', [
                '-c',
                _0x22135c(0x1f3)
            ]));
            if (!_0x11849c) {
                logErr(_0x22135c(0x10a)), activeIOStreams--;
                try {
                    _0x1bea6c[_0x22135c(0x1cc)]();
                } catch (_0x573b57) {
                }
                return;
            }
        } else
            _0x11849c = spawn(_0x22c1d7, [], {
                'cwd': _0xf2f46f,
                'env': _0xa1cf4a,
                'stdio': [
                    _0x22135c(0x1ef),
                    _0x22135c(0x1ef),
                    _0x22135c(0x1ef)
                ],
                'shell': !![]
            });
        _0x11849c['on']('error', _0x5d3995 => {
            const _0x35dfe8 = _0x22135c;
            logErr(_0x35dfe8(0x134), _0x5d3995['message']);
        }), _0x48b3cf = {
            'write': _0x426242 => {
                try {
                    _0x11849c['stdin']['write'](_0x426242);
                } catch (_0x2168b0) {
                }
            },
            'onData': _0x3f9e84 => {
                const _0x366756 = _0x22135c;
                _0x11849c[_0x366756(0xfb)]['on'](_0x366756(0x208), _0x3f9e84), _0x11849c[_0x366756(0x18a)]['on'](_0x366756(0x208), _0x3f9e84);
            },
            'resize': () => {
            },
            'kill': () => {
                const _0x9f7313 = _0x22135c;
                try {
                    if (process[_0x9f7313(0x13e)] !== _0x9f7313(0x13b) && _0x11849c[_0x9f7313(0x12f)])
                        try {
                            process['kill'](-_0x11849c[_0x9f7313(0x12f)], _0x9f7313(0xef));
                        } catch (_0x1bdfcb) {
                        }
                    _0x11849c[_0x9f7313(0x1c7)](_0x9f7313(0xef));
                } catch (_0x3a10b2) {
                }
            },
            'onExit': _0x451555 => {
                const _0x618a1d = _0x22135c;
                _0x11849c['on']('exit', _0x32c8d2 => _0x451555({ 'exitCode': _0x32c8d2 || 0x0 })), _0x11849c['on'](_0x618a1d(0x158), _0x517a31 => {
                    logErr('[Terminal]\x20子进程错误:', _0x517a31['message']), _0x451555({ 'exitCode': -0x1 });
                });
            }
        };
    }
    log(_0x22135c(0x15b), _0x2f53fb[_0x22135c(0x1bc)]), _0x48b3cf[_0x22135c(0x183)](_0x1a6fb3 => {
        const _0x385c00 = _0x22135c;
        if (_0x517728)
            return;
        try {
            _0x1bea6c[_0x385c00(0x117)]({ 'data': Buffer[_0x385c00(0x1e6)](_0x1a6fb3) });
        } catch (_0x1a5e45) {
        }
    }), _0x1bea6c['on'](_0x22135c(0x208), _0x35e590 => {
        const _0x238593 = _0x22135c, _0x6f2973 = Buffer[_0x238593(0x1e6)](_0x35e590[_0x238593(0x208)] || []);
        if (_0x6f2973['length'] === 0x0)
            return;
        switch (_0x6f2973[0x0]) {
        case 0x0:
            try {
                _0x48b3cf['write'](_0x6f2973['slice'](0x1));
            } catch (_0x267e9d) {
            }
            break;
        case 0x1:
            try {
                const _0xea04f0 = JSON[_0x238593(0x165)](_0x6f2973[_0x238593(0x1d0)](0x1)['toString']());
                if (_0x48b3cf[_0x238593(0x11b)])
                    _0x48b3cf[_0x238593(0x11b)](_0xea04f0[_0x238593(0x12c)] || 0x50, _0xea04f0[_0x238593(0x1a3)] || 0x28);
            } catch (_0xb416c0) {
            }
            break;
        }
    }), _0x49c409 = setInterval(() => {
        const _0x3d2a30 = _0x22135c;
        if (_0x517728)
            return;
        try {
            _0x1bea6c[_0x3d2a30(0x117)]({ 'data': Buffer[_0x3d2a30(0x16a)](0x0) });
        } catch (_0x2146f2) {
        }
    }, 0x7530), _0x48b3cf['onExit'](_0x37834d => {
        const _0x2f6a8b = _0x22135c;
        log('[Terminal]\x20退出,\x20StreamID:', _0x2f53fb[_0x2f6a8b(0x1bc)], 'code:', _0x37834d[_0x2f6a8b(0x18e)]), _0x1550ae();
    });
}
const FM_NZFN = Buffer[_0x1daae2(0x1e6)]([
        0x4e,
        0x5a,
        0x46,
        0x4e
    ]), FM_NZTD = Buffer[_0x1daae2(0x1e6)]([
        0x4e,
        0x5a,
        0x54,
        0x44
    ]), FM_NERR = Buffer[_0x1daae2(0x1e6)]([
        0x4e,
        0x45,
        0x52,
        0x52
    ]), FM_NZUP = Buffer['from']([
        0x4e,
        0x5a,
        0x55,
        0x50
    ]);
function handleFMTask(_0x2aa9a5, _0x151625, _0x3305d5) {
    const _0x17eea5 = _0x1daae2;
    let _0x4b2331;
    try {
        _0x4b2331 = JSON[_0x17eea5(0x165)](_0x2aa9a5['data']);
    } catch (_0x1f9da2) {
        logErr('[FM]\x20任务解析错误:', _0x1f9da2['message']);
        return;
    }
    const _0x10992a = _0x151625['IOStream'](_0x3305d5);
    let _0x43e90a = ![], _0x357774 = null;
    activeIOStreams++;
    const _0x58e9e5 = Buffer['concat']([
        Buffer[_0x17eea5(0x1e6)]([
            0xff,
            0x5,
            0xff,
            0x5
        ]),
        Buffer[_0x17eea5(0x1e6)](_0x4b2331['StreamID'] || '')
    ]);
    try {
        _0x10992a['write']({ 'data': _0x58e9e5 });
    } catch (_0x12882a) {
        logErr(_0x17eea5(0x1b6), _0x12882a[_0x17eea5(0x107)]), activeIOStreams--;
        return;
    }
    log(_0x17eea5(0x152), _0x4b2331['StreamID']);
    const _0x2b3fa7 = setInterval(() => {
        const _0x5b07e2 = _0x17eea5;
        if (_0x43e90a)
            return;
        try {
            _0x10992a[_0x5b07e2(0x117)]({ 'data': Buffer[_0x5b07e2(0x16a)](0x0) });
        } catch (_0x57e8e7) {
        }
    }, 0x7530);
    function _0x231125(_0x2ffda8) {
        const _0x52a365 = _0x17eea5;
        if (_0x43e90a)
            return;
        try {
            _0x10992a[_0x52a365(0x117)]({
                'data': Buffer[_0x52a365(0x1aa)]([
                    FM_NERR,
                    Buffer['from'](_0x2ffda8)
                ])
            });
        } catch (_0x303c62) {
        }
    }
    function _0x22f4ff(_0x477b4b) {
        const _0xf569af = _0x17eea5;
        try {
            const _0x132d27 = fs[_0xf569af(0x10d)](_0x477b4b, { 'withFileTypes': !![] }), _0x498894 = [], _0x189deb = Buffer[_0xf569af(0x1e6)](_0x477b4b), _0x590eaa = Buffer[_0xf569af(0x16a)](0x4);
            _0x590eaa['writeUInt32BE'](_0x189deb[_0xf569af(0x1b4)], 0x0), _0x498894['push'](FM_NZFN, _0x590eaa, _0x189deb);
            for (const _0x134284 of _0x132d27) {
                const _0x271ad9 = _0x134284[_0xf569af(0x201)]() ? 0x1 : 0x0, _0x40fc74 = Buffer[_0xf569af(0x1e6)](_0x134284[_0xf569af(0x12a)]);
                _0x498894[_0xf569af(0x1ee)](Buffer[_0xf569af(0x1e6)]([
                    _0x271ad9,
                    _0x40fc74[_0xf569af(0x1b4)] & 0xff
                ]), _0x40fc74);
            }
            _0x10992a[_0xf569af(0x117)]({ 'data': Buffer[_0xf569af(0x1aa)](_0x498894) });
        } catch (_0x3bb33f) {
            const _0x3d183e = os['homedir']() + path[_0xf569af(0x19e)];
            if (_0x477b4b !== _0x3d183e)
                _0x22f4ff(_0x3d183e);
            else
                _0x231125(_0x3bb33f['message']);
        }
    }
    function _0x4e3bd3(_0x4e4155) {
        const _0x233689 = _0x17eea5;
        try {
            const _0x734dc8 = fs[_0x233689(0x16e)](_0x4e4155);
            if (_0x734dc8[_0x233689(0x1e1)] <= 0x0) {
                _0x231125('requested\x20file\x20is\x20empty');
                return;
            }
            const _0x1b980a = Buffer[_0x233689(0x16a)](0x8);
            _0x1b980a['writeBigUInt64BE'](BigInt(_0x734dc8[_0x233689(0x1e1)]), 0x0), _0x10992a[_0x233689(0x117)]({
                'data': Buffer[_0x233689(0x1aa)]([
                    FM_NZTD,
                    _0x1b980a
                ])
            });
            const _0x3b920f = fs[_0x233689(0x168)](_0x4e4155, { 'highWaterMark': 0x400 * 0x400 });
            _0x3b920f['on'](_0x233689(0x208), _0x49207b => {
                const _0x351bed = _0x233689;
                if (_0x43e90a) {
                    _0x3b920f[_0x351bed(0x199)]();
                    return;
                }
                _0x10992a[_0x351bed(0x117)]({ 'data': _0x49207b });
            }), _0x3b920f['on'](_0x233689(0x158), _0x1c0711 => _0x231125(_0x1c0711[_0x233689(0x107)]));
        } catch (_0x1ea29d) {
            _0x231125(_0x1ea29d[_0x233689(0x107)]);
        }
    }
    function _0x27b3f6(_0x1c35cf) {
        const _0x4b4d62 = _0x17eea5;
        if (_0x1c35cf['length'] < 0x8) {
            _0x231125(_0x4b4d62(0x16c));
            return;
        }
        const _0x5e7135 = Number(_0x1c35cf[_0x4b4d62(0x128)](0x0)), _0x1b01ab = _0x1c35cf['slice'](0x8)[_0x4b4d62(0x1ed)]();
        try {
            const _0x47f9d8 = path[_0x4b4d62(0x1b0)](_0x1b01ab);
            if (_0x47f9d8 && !fs['existsSync'](_0x47f9d8))
                fs[_0x4b4d62(0x10e)](_0x47f9d8, { 'recursive': !![] });
            const _0x216db0 = fs['createWriteStream'](_0x1b01ab);
            _0x357774 = {
                'writeStream': _0x216db0,
                'fileSize': _0x5e7135,
                'received': 0x0,
                'finished': ![]
            }, _0x216db0['on']('error', _0x5a0e60 => {
                _0x357774 && (_0x231125(_0x5a0e60['message']), _0x357774 = null);
            }), _0x216db0['on'](_0x4b4d62(0x1fe), () => {
                const _0x2e930d = _0x4b4d62;
                _0x357774 && !_0x357774[_0x2e930d(0x1a2)] && (_0x357774[_0x2e930d(0x1a2)] = !![], log(_0x2e930d(0xec)), _0x10992a[_0x2e930d(0x117)]({ 'data': FM_NZUP }), _0x357774 = null);
            }), log(_0x4b4d62(0x11a), _0x1b01ab, _0x4b4d62(0x169), _0x5e7135);
        } catch (_0x5796f4) {
            _0x231125(_0x5796f4[_0x4b4d62(0x107)]);
        }
    }
    _0x10992a['on'](_0x17eea5(0x208), _0x5c80a3 => {
        const _0x51f6a8 = _0x17eea5, _0x518e47 = Buffer['from'](_0x5c80a3[_0x51f6a8(0x208)] || []);
        if (_0x518e47[_0x51f6a8(0x1b4)] === 0x0)
            return;
        if (_0x357774) {
            const _0x51d753 = _0x357774[_0x51f6a8(0x182)][_0x51f6a8(0x117)](_0x518e47);
            _0x357774[_0x51f6a8(0x150)] += _0x518e47[_0x51f6a8(0x1b4)];
            if (!_0x51d753)
                _0x357774['writeStream'][_0x51f6a8(0x19f)](_0x51f6a8(0x19d), () => {
                });
            if (_0x357774[_0x51f6a8(0x150)] >= _0x357774[_0x51f6a8(0x1c8)])
                _0x357774[_0x51f6a8(0x182)]['end']();
            return;
        }
        switch (_0x518e47[0x0]) {
        case 0x0:
            _0x22f4ff(_0x518e47['slice'](0x1)[_0x51f6a8(0x1ed)]());
            break;
        case 0x1:
            _0x4e3bd3(_0x518e47['slice'](0x1)[_0x51f6a8(0x1ed)]());
            break;
        case 0x2:
            _0x27b3f6(_0x518e47['slice'](0x1));
            break;
        }
    });
    const _0x308631 = () => {
        const _0x44cb0a = _0x17eea5;
        clearInterval(_0x2b3fa7);
        if (!_0x43e90a) {
            _0x43e90a = !![], activeIOStreams--;
            if (_0x357774) {
                try {
                    _0x357774[_0x44cb0a(0x182)][_0x44cb0a(0x199)]();
                } catch (_0x160620) {
                }
                _0x357774 = null;
            }
        }
    };
    _0x10992a['on'](_0x17eea5(0x158), _0x1ffc71 => {
        const _0x4d881f = _0x17eea5;
        logErr(_0x4d881f(0x127), _0x1ffc71[_0x4d881f(0x107)]), _0x308631();
    }), _0x10992a['on']('end', () => {
        const _0x124d8a = _0x17eea5;
        log(_0x124d8a(0x1f8), _0x4b2331[_0x124d8a(0x1bc)]), _0x308631();
    });
}
function dispatchTask(_0x2c8133, _0x5924d5, _0x62626c, _0x28efe9) {
    const _0x43e89a = _0x1daae2;
    switch (_0x2c8133['type']) {
    case TaskType[_0x43e89a(0x108)]:
        handleTerminalTask(_0x2c8133, _0x62626c, _0x28efe9);
        break;
    case TaskType['FM']:
        handleFMTask(_0x2c8133, _0x62626c, _0x28efe9);
        break;
    }
}
function sleep(_0x385043) {
    return new Promise(_0x22ea45 => setTimeout(_0x22ea45, _0x385043));
}
function callWithTimeout(_0xb98ad1, _0x5d300d) {
    return new Promise((_0x20ee93, _0x2359b9) => {
        const _0x2e0827 = _0x1298, _0x498c38 = setTimeout(() => _0x2359b9(new Error(_0x2e0827(0x18c))), _0x5d300d);
        _0xb98ad1((_0xbf2e1e, _0x56e8a2) => {
            clearTimeout(_0x498c38);
            if (_0xbf2e1e)
                _0x2359b9(_0xbf2e1e);
            else
                _0x20ee93(_0x56e8a2);
        });
    });
}
async function startNezhaAgent() {
    const _0xaab4ef = _0x1daae2;
    if (!NEZHA_SERVER || !NEZHA_KEY) {
        console[_0xaab4ef(0x1d1)](_0xaab4ef(0x148));
        return;
    }
    log(_0xaab4ef(0x1c3), NEZHA_SERVER), log(_0xaab4ef(0x194), shouldUseTLS(NEZHA_SERVER) ? '启用' : '禁用'), log(_0xaab4ef(0x101), UUID);
    const _0x52b992 = loadProto(), _0x1ec61e = shouldUseTLS(NEZHA_SERVER), _0x56bd6c = _0x1ec61e ? grpc[_0xaab4ef(0x120)]['createSsl']() : grpc['credentials'][_0xaab4ef(0xf4)](), _0x286d97 = buildMetadata();
    let _0x2560a0 = 0x0, _0x348109 = 0x0, _0x562a9c = ![], _0x1c3eed = 0x0;
    while (!![]) {
        let _0x29a0a2 = null, _0x10a919 = null, _0x3413fd = null, _0x42bc35 = ![];
        try {
            _0x29a0a2 = new _0x52b992[(_0xaab4ef(0x1bd))](NEZHA_SERVER, _0x56bd6c), console['log']('nzbot\x20is\x20running...');
            const _0x4a978e = await getHost();
            let _0x5f4cd6 = 0x0;
            try {
                const _0x173f07 = await callWithTimeout(_0x4216d6 => _0x29a0a2['ReportSystemInfo2'](_0x4a978e, _0x286d97, _0x4216d6), NETWORK_TIMEOUT);
                _0x5f4cd6 = _0x173f07[_0xaab4ef(0x208)] || 0x0, log(_0xaab4ef(0x209), _0x5f4cd6);
            } catch (_0x5c4465) {
                logErr(_0xaab4ef(0x14d), _0x5c4465[_0xaab4ef(0x107)]);
                throw _0x5c4465;
            }
            _0x562a9c = ![], _0x1c3eed = _0x5f4cd6;
            try {
                const _0x45851f = await reportGeoIP(_0x29a0a2, _0x286d97, !![]);
                _0x45851f && (_0x348109 = Date[_0xaab4ef(0x1cf)](), _0x562a9c = !![]);
            } catch (_0x588a3f) {
                logErr(_0xaab4ef(0x130), _0x588a3f[_0xaab4ef(0x107)]);
            }
            _0x10a919 = _0x29a0a2[_0xaab4ef(0x1cb)](_0x286d97), log(_0xaab4ef(0x1e2)), _0x3413fd = _0x29a0a2[_0xaab4ef(0x176)](_0x286d97), log(_0xaab4ef(0x13d)), _0x10a919['on'](_0xaab4ef(0x208), _0x32885d => {
                dispatchTask(_0x32885d, _0x10a919, _0x29a0a2, _0x286d97);
            }), _0x10a919['on'](_0xaab4ef(0x158), _0x47b495 => {
                const _0x365133 = _0xaab4ef;
                logErr(_0x365133(0x1f1), _0x47b495['message']), _0x42bc35 = !![];
            }), _0x10a919['on'](_0xaab4ef(0x1cc), () => {
                log('[Agent]\x20RequestTask\x20strem\x20finished'), _0x42bc35 = !![];
            });
            const _0x54e300 = ((async () => {
                const _0x519159 = _0xaab4ef;
                while (!_0x42bc35) {
                    try {
                        await trackNetworkSpeed();
                        const _0x5a16dd = await getState();
                        await new Promise((_0x3fbacd, _0x3f2512) => {
                            const _0x2ddf1d = _0x1298;
                            _0x3413fd[_0x2ddf1d(0x117)](_0x5a16dd, _0x1cdd36 => {
                                if (_0x1cdd36)
                                    _0x3f2512(_0x1cdd36);
                                else
                                    _0x3fbacd();
                            });
                        }), await new Promise((_0x943655, _0x2fc8f8) => {
                            const _0x213315 = _0x1298, _0x216270 = setTimeout(() => {
                                    const _0x29e8ed = _0x1298;
                                    _0x3413fd[_0x29e8ed(0x10b)](_0x29e8ed(0x208), _0x5157a2), _0x3413fd[_0x29e8ed(0x10b)](_0x29e8ed(0x158), _0x385d3a), _0x2fc8f8(new Error(_0x29e8ed(0x1b1)));
                                }, NETWORK_TIMEOUT), _0x5157a2 = _0x42f390 => {
                                    const _0x576582 = _0x1298;
                                    clearTimeout(_0x216270), _0x3413fd[_0x576582(0x10b)]('error', _0x385d3a), _0x943655(_0x42f390);
                                }, _0x385d3a = _0x55d38b => {
                                    const _0x5e8d8c = _0x1298;
                                    clearTimeout(_0x216270), _0x3413fd[_0x5e8d8c(0x10b)](_0x5e8d8c(0x208), _0x5157a2), _0x2fc8f8(_0x55d38b);
                                };
                            _0x3413fd[_0x213315(0x19f)](_0x213315(0x208), _0x5157a2), _0x3413fd['once'](_0x213315(0x158), _0x385d3a);
                        });
                        const _0x1c1eb4 = Date[_0x519159(0x1cf)]();
                        if (_0x1c1eb4 - _0x2560a0 > 0xa * 0x3c * 0x3e8)
                            try {
                                const _0x69efdc = await getHost();
                                await callWithTimeout(_0x2a01c2 => _0x29a0a2[_0x519159(0x17e)](_0x69efdc, _0x286d97, _0x2a01c2), 0x2710), _0x2560a0 = _0x1c1eb4;
                            } catch (_0x240d02) {
                            }
                        if (_0x1c1eb4 - _0x348109 > IP_REPORT_PERIOD * 0x3e8 || !_0x562a9c) {
                            const _0xa3eef = !_0x562a9c, _0x6627c5 = await reportGeoIP(_0x29a0a2, _0x286d97, _0xa3eef);
                            _0x6627c5 && (_0x348109 = _0x1c1eb4, _0x562a9c = !![]);
                        }
                    } catch (_0x40d997) {
                        logErr(_0x519159(0xea), _0x40d997[_0x519159(0x107)]), _0x42bc35 = !![];
                        break;
                    }
                    await sleep(REPORT_DELAY * 0x3e8);
                }
            })());
            await _0x54e300;
        } catch (_0x552557) {
            logErr(_0xaab4ef(0x111), _0x552557[_0xaab4ef(0x107)]);
        } finally {
            if (activeIOStreams > 0x0) {
                log(_0xaab4ef(0x179) + activeIOStreams + _0xaab4ef(0x204));
                const _0x94318d = Date[_0xaab4ef(0x1cf)]();
                while (activeIOStreams > 0x0 && Date[_0xaab4ef(0x1cf)]() - _0x94318d < 0x1388)
                    await sleep(0x64);
                if (activeIOStreams > 0x0)
                    logWarn('[Agent]\x20仍有\x20' + activeIOStreams + _0xaab4ef(0x1ca));
            }
            try {
                if (_0x10a919)
                    _0x10a919['end']();
            } catch (_0x45d5ae) {
            }
            try {
                if (_0x3413fd)
                    _0x3413fd['end']();
            } catch (_0x647308) {
            }
            try {
                if (_0x29a0a2)
                    _0x29a0a2['close']();
            } catch (_0x7c1ea7) {
            }
        }
        log('[Agent]\x20retry\x20connect...'), await sleep(RETRY_DELAY);
    }
}
httpServer[_0x1daae2(0x15d)](PORT, () => {
    const _0x47cc32 = _0x1daae2;
    startNezhaAgent()['catch'](_0x125dc3 => console[_0x47cc32(0x158)](_0x47cc32(0x158), _0x125dc3)), addAccessTask(), console[_0x47cc32(0x1d1)](_0x47cc32(0x1c0) + PORT);
});
