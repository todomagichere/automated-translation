<?php

/**
 * @copyright Copyright (C) Ibexa AS. All rights reserved.
 * @license For full copyright and license information view LICENSE file distributed with this source code.
 */
declare(strict_types=1);

namespace Ibexa\Bundle\AutomatedTranslation;

final class Events
{
    /**
     * @Event("\Ibexa\Bundle\AutomatedTranslation\Event\FieldEncodeEvent")
     */
    public const POST_FIELD_ENCODE = 'ibexa.automated_translation.post_field_encode';

    /**
     * @Event("\Ibexa\Bundle\AutomatedTranslation\Event\FieldDecodeEvent")
     */
    public const POST_FIELD_DECODE = 'ibexa.automated_translation.post_field_decode';
}
