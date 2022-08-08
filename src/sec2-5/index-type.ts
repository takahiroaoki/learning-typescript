type SupportVersions = {
    [env: number]: boolean;
}

let versions: SupportVersions = {
    101: false,
    102: false,
    103: false,
    104: true,
};

console.log(versions);