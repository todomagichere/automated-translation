<?php

/**
 * @copyright Copyright (C) Ibexa AS. All rights reserved.
 * @license For full copyright and license information view LICENSE file distributed with this source code.
 */
declare(strict_types=1);

namespace Ibexa\Bundle\AutomatedTranslation;

use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\HttpKernel\Bundle\Bundle;

class IbexaAutomatedTranslationBundle extends Bundle
{
    public function getParent(): ?string
    {
        return 'IbexaAdminUiBundle';
    }

    public function build(ContainerBuilder $container): void
    {
        parent::build($container);
    }
}

class_alias(IbexaAutomatedTranslationBundle::class, 'EzSystems\EzPlatformAutomatedTranslationBundle\EzPlatformAutomatedTranslationBundle');
