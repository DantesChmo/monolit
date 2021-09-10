include ./dev/bin/makefiles/external.mk
include ./dev/bin/makefiles/internal.mk

.PHONY: get-permissions
get-permissions:
	chmod +x ./dev/bin/amake
