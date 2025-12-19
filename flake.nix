{
  description = "The cafeparacosm.org website";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs?ref=nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils, ... }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        packagename = "cafeparacosm.org";
        pkgs = nixpkgs.legacyPackages.${system};
        builddeps = with pkgs; [
          nodejs_22
        ];
      in
      {
        packages.default = pkgs.buildNpmPackage {
          name = packagename;
          nativeBuildInputs = builddeps;
          src = self;
          npmDepsHash = "sha256-8NpcCkYqRHD1wrkVu9uS6DesWJj9LBmfy8DO84LvdbE=";
          installPhase = ''
            mkdir $out
            cp -r out/. $out/
          '';
        };
        devShell = pkgs.mkShell {
          name = packagename;
          packages = builddeps;
        };
      }
    );
}